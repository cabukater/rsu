import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';
import { map } from 'rxjs/operators';
export interface Estado{
        id: string;
        uf_codigo: string;
        nome: string;
        uf_nome: string;
        regiao: string;
        id_pais: string;
        ativo: string;
        tarifa: string;

}

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  teste: any;
  cidades: any[] = [];
  estados: any[] = [];
  cidadesRef: AngularFireList<any>;
  constructor(
    private firebase: AngularFireDatabase,
    private http : HttpClient
  ) { }

  getEstados() {
    //return this.http.get('http://cidades-estados-71974-default-rtdb.firebaseio.com/data?sigUF='+ uf).pipe(
    return this.firebase.list('/estados/data')
      .snapshotChanges().subscribe(res => {
        res.forEach(doc => {
          this.estados.push(doc.payload.val());         
        });
      }
      )
  }

   getCidades(uf){    
     //return this.http.get('http://cidades-estados-71974-default-rtdb.firebaseio.com/data?sigUF='+ uf).pipe(
      this.cidadesRef = this.firebase.list('/cias/data', ref => ref
      .orderByChild('sigUF')
      .equalTo(uf));
     this.cidadesRef
    .snapshotChanges().subscribe((res) => {
    this.cidades = res.map(change => ({key: change.payload.key, ...change.payload.val()}));
 });
}

saveCLient(cliente){
   this.firebase.list('/clientes/data').push(cliente)
   .then((result: any) => {
    console.log(result);
  });
}

 }
