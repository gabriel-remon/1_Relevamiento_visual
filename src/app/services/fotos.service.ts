import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { Foto } from '../models/foto.model';
import { getAuth } from 'firebase/auth';

import { getApp } from "firebase/app";
import { getDownloadURL, getStorage,ref, uploadBytes  } from "firebase/storage";


@Injectable({
  providedIn: 'root'
})
export class FotosService {

  //storage
   firebaseApp = getApp();
  storage = getStorage(this.firebaseApp, "gs://remonapp-637a3.appspot.com");
 

  auth = inject(AngularFireAuth);
  fireStorage = inject(AngularFirestore)
  
  async nuevaFoto(path: string,file:any[]){
    const user=getAuth().currentUser
    let newFoto:any ={};
    newFoto.fecha = new Date().toLocaleString('es-AR', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    })
    newFoto.nombre_usurio = user.displayName
    newFoto.id_propietario = user.uid
    newFoto.votos=[]
    for(let i=0 ; i<file.length;i++){
      let docBd = doc(getFirestore(),`${path}/${new Date().getTime()}`)
      newFoto.uid = docBd.id
      let storageRef = ref(this.storage,newFoto.uid);
      
      await uploadBytes(storageRef, file[i])
      let url = await getDownloadURL(storageRef)
      newFoto.src=url
      setDoc(docBd,newFoto)
        
      
    }
    


   
  }
  getFotos(tabla:string){//,funcion:(mensajes:MensajeChat[])=>void,finaly?:()=>void) {
    // Crear una consulta ordenada por el campo 'fecha' en orden ascendente
    const mensajeRef = this.fireStorage.collection(tabla,ref=>ref.orderBy('fecha'))
    
    //const q = query(mensajeRef,orderBy('fecha'))
    return mensajeRef.snapshotChanges() 
  }

  getMisFotos(tabla:string){//,funcion:(mensajes:MensajeChat[])=>void,finaly?:()=>void) {
    // Crear una consulta ordenada por el campo 'fecha' en orden ascendente
    const mensajeRef = this.fireStorage.collection(tabla,ref=>ref.orderBy('fecha').where("id_propietario","==",getAuth().currentUser.uid))
    
    //const q = query(mensajeRef,orderBy('fecha'))
    return mensajeRef.snapshotChanges() 
  }

  votarFoto(path:string,foto:Foto){
    foto.votos.push(getAuth().currentUser.uid)
    return this.fireStorage.collection(path).doc(foto.uid).update(foto);
  }

  async getDocument(path:string){
    return (await getDoc(doc(getFirestore(),path))).data();
  }
}
