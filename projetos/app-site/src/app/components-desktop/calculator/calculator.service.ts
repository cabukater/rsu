import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  url = 'http://localhost:3000'
  constructor(
    private http: HttpClient

  ) {

   }

   getStates(){
     return this.http.get(this.url);
   }
}
