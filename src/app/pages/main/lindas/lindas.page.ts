import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ChartComponent } from "ng-apexcharts";


import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
  events:any
};

@Component({
  selector: 'app-lindas',
  templateUrl: './lindas.page.html',
  styleUrls: ['./lindas.page.scss'],
})
export class LindasPage implements OnInit {
  confirmarImagen:boolean=false;
  imgSelec:any;

  fotos =[
    
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid","asdsad"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid","asdsad"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid","asdasdasd","asdsad"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    },
    {
      uid:"sdasdasdas",
      nombre_usurio:"pepe",
      id_propietario:"pepeid",
      src:"assets/test/basto.1.png",
      votos:["pepe2","pepeid"],
      fecha:"10/10/10 10:10:10"
    }
  ]
  constructor(private alertController: AlertController) { }

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  ngOnInit() { this.chartOptions = {
    series: [14, 23, 21, 17, 15],
    chart: {
      type: "polarArea"
    },
    labels:
      ["juan",2,3,4,5]
    ,
    stroke: {
      colors: ["#fff"]
    },
    fill: {
      opacity: 0.8
    },
    
  };
  }


  getImagenGrafico(event){
    console.log("serie seleccionada", event.chartObj)
    //console.log("valor de la serie seleccionada", opts.dataPoint)

  }
  seleccionarImagen(foto:any){
    this.confirmarImagen=true;
    this.imgSelec=foto
  }

  votarImagen(){

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
