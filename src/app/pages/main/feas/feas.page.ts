import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { EChartsOption } from 'echarts';
import { provideEcharts } from 'ngx-echarts';
import { Foto } from 'src/app/models/foto.model';
import { FirebaeService } from 'src/app/services/firebae.service';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-feas',
  templateUrl: './feas.page.html',
  styleUrls: ['./feas.page.scss'],
  providers: [
    provideEcharts(),
  ]
})
export class FeasPage implements OnInit {

  //base de datos
  baseDatos = "feas"

  confirmarImagen: boolean = false;
  imgSelec: Foto;
  user: any;
  authSvc = inject(FirebaeService)
  //chart opcion
  opcionesCambio: EChartsOption;
  opciones: EChartsOption;
  topImages = [];

  //subir fotos
  fotoSvc = inject(FotosService)
  fotos: Foto[] = []

  constructor(private alertController: AlertController) {
    this.user = this.authSvc.getauth().currentUser
    this.opciones = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        position: 'inside',
        displayMode: 'single',
        formatter: (params: any) => {
          console.log(params)
          if (params) {
            return "<p>Autor: "+ params.data.name+"</p>"+"<img src='" + params.data.src + "' style='height: 10rem'></img> <p> " + params.data.value + " <ion-icon slot='icon-only' name='heart'></ion-icon></p>"
          } else {
            return "no image"
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },

      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [10, 20, 40, 60, 100,]
        }
      ]
    };
    this.opcionesCambio = this.opciones
  }

  ngOnInit() {
    this.fotoSvc.getFotos(this.baseDatos).subscribe((docSnap) => {
      this.fotos = []
      docSnap.map(user => {
        this.fotos.push(user.payload.doc.data() as Foto)
      })
      this.generarTop()
    })
  }

  ngAfterViewInit(): void { // || IMPORTANTE || CARGAR DATOS DESPUES DE QUE SE CARGE LA VISTA DEL CHART

    return
  }

  seleccionarImagen(foto: any) {
    this.confirmarImagen = true;
    this.imgSelec = foto
  }

 async  votarImagen() {
    
    if (this.imgSelec.votos.includes(this.user.uid)) {
      const mensaje = await this.alertController.create({
        message:"Ya votó esta foto, no puede votar dos veces una misma foto",
        buttons:["ok"]
      })
      await mensaje.present()
    } else {
      const mensaje = await this.alertController.create({
        message:"nuevo votó registrado",
        buttons:["ok"]
      })
      await mensaje.present()
      this.fotoSvc.votarFoto(this.baseDatos, this.imgSelec)
    }
    this.imgSelec = null
    this.confirmarImagen = false
  }

  generarTop() {
    let arrayAux = [... this.fotos]

    arrayAux.sort((a: Foto, b: Foto) => {
      const valorA = a.votos.length;
      const valorB = b.votos.length;

      // Comparar los valores numéricos
      if (valorA > valorB) {
        return -1; // Primer objeto antes
      } else if (valorA < valorB) {
        return 1; // Segundo objeto antes
      } else {
        return 0; // Objetos iguales
      }
    })

    arrayAux = arrayAux.slice(0, 5)
    this.topImages = []
    arrayAux.forEach(element => {
      this.topImages.push({
        value: element.votos.length,
        name: element.nombre_usurio,
        src: element.src
      })
    })


    let value = []
    let categori = []

    this.topImages.forEach(element => {
      value.push({ value: element.value, src: element.src })
      categori.push(element.name)
    })

    this.opcionesCambio = {
      series: {
        data: value
      },
      xAxis: {
        data: categori
      }
    }
  }


  async sacarFoto() {
    const fotos: any[] = []

    const photo: Photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      presentationStyle: "fullscreen"
    });
    const response = await fetch(photo.webPath || photo.path);
    const blob = await response.blob()
    fotos.push(blob)

    await this.alertCustom("Desea sacar otra foto?")
    this.fotoSvc.nuevaFoto(this.baseDatos, fotos)
  }

  async alertCustom(messageIn: string) {
    const alert = await this.alertController.create({
      header: messageIn,
      buttons: [
        {
          text: 'No',
          role: 'no',
        },
        {
          text: 'Si',
          role: 'si',
          handler: () => {
            this.sacarFoto()
          }
        },
      ]
    })
    await alert.present();
  }
  /*
  async alertCustom(messageIn: string) {
    const alert = await this.alertController.create({
      header: messageIn,
      buttons: ['ok']
    })
    await alert.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Desbloquear alarma',
      message: 'Por favor ingrese su contraseña para desbloquear',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'contraseña',
        }],
      buttons: [{
        text: 'Aceptar',
        handler: (data) => {
          let passwordSave = this.utilSvc.getFrontLocalStorage('password').password;
          // Aquí puedes acceder a los valores ingresados por el usuario
          if (passwordSave == data.password) {
            this.alertCustom('alarma desbloqueada')
            Motion.removeAllListeners()
            this.titulo_alarma = "Alarma desactivada";
            this.estado_alarma = false;
          } else {
            this.alertCustom('contraseña incorrecta')
            this.audio5.play()
            this.flashActivate()
            this.vibrar()
            this.bloquearDetecionPorSegundos(5)
          }
        }
      }]
    });
  
    await alert.present();
  }*/

}
