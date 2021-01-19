import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
leads : any[] = []
  constructor(
    private firebase: AngularFireDatabase,

  ) { }

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
}
