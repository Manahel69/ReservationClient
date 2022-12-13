import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore, AngularFirestoreCollectionGroup } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc, setDoc } from "firebase/firestore";



@Injectable({
  providedIn: 'root'
})
export class ServiceDbService {

  constructor(private afs: AngularFirestore) { }



  async addRdv(idClient: string, idPresta: string, idRdv: string, date: string) {



    // Add a new document with a generated id.
    this.afs.doc("rdv").set({idClient: idClient,
      idPresta: idPresta,
      idRdv:idRdv,
      date:date});
    
   
    
  }

}


