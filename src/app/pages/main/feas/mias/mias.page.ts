import { Component, OnInit, inject } from '@angular/core';
import { Foto } from 'src/app/models/foto.model';
import { FirebaeService } from 'src/app/services/firebae.service';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-mias',
  templateUrl: './mias.page.html',
  styleUrls: ['./mias.page.scss'],
})
export class MiasPage implements OnInit {


  //base de datos
  baseDatos = "feas"
  
  fotoSvc = inject(FotosService)
  fotos:Foto[] =[]
  user:any;
  authSvc = inject(FirebaeService)
  confirmarImagen:boolean=false;
  imgSelec:Foto;

  constructor() { 
    this.user = this.authSvc.getauth().currentUser
  }

  
  ngOnInit() {
    this.fotoSvc.getMisFotos(this.baseDatos).subscribe((docSnap)=>{
      this.fotos=[]
        docSnap.map(user=>{
          this.fotos.push(user.payload.doc.data() as Foto)
        })
  })}


  seleccionarImagen(foto:any){
    this.confirmarImagen=true;
    this.imgSelec=foto
  }

}
