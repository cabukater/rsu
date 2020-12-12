import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

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

  constructor(
    private http : HttpClient
  ) { }

  getEstados(){
   return  this.http.get('http://technosol.ind.br/teste/js/estados.json').pipe()
   }

   getCidades(uf){
     return this.http.get('http://localhost:3000/data?sigUF='+ uf).pipe()
   }
}
