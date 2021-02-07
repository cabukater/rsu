import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Lead } from './leads.model';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
leads : any[] = []
customersRef: AngularFireList<Lead> = null;

  constructor(
    private firebase: AngularFireDatabase  ) { }

  getLeads() {
    //return this.http.get('http://cidades-estados-71974-default-rtdb.firebaseio.com/data?sigUF='+ uf).pipe(
    return this.firebase.list('/clientes/data')
      .snapshotChanges().subscribe(res => {
        res.forEach(doc => {
          this.leads.push(doc.payload.val());         
        });
      }   
      )
   
  }
  remove(item){
    this.firebase.list('/clientes/data').remove(item)
  }

}
