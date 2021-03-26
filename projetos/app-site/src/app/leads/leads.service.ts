import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Lead } from './leads.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
leads : any;
customersRef: AngularFireList<Lead> = null;

  constructor(
    private firestore: AngularFirestore,
    private firebase: AngularFireDatabase  ) { }

  getLeads() {
    //return this.http.get('http://cidades-estados-71974-default-rtdb.firebaseio.com/data?sigUF='+ uf).pipe(
    return this.firestore.collection('/clientes').snapshotChanges()
   
  }
  remove(itemId: string){
    this.firestore.doc('/clientes/data'+ itemId).delete()
  }

 saveCLient(form){
  return new Promise<any>((resolve, reject) =>{
  return this.firestore.collection('clientes').add(form)
  .then(res => {}, err => reject(err));
}
  )}
}
