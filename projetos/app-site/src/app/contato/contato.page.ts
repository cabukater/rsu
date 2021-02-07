import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import  './smtp.js'
import { CalculadoraService } from '../calculadora/calculadora.service.js';
import { ModalController } from '@ionic/angular';
declare let Email: any;
@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  form: FormGroup;
  ifError: boolean;

  constructor(
    private router: Router,
    public service: CalculadoraService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
      nome: new FormControl(),
      tel: new FormControl(),
   }) 
  }

  saveUSer(form){
    if (this.form.valid){
      this.ifError = false
      console.log('teste')
      this.router.navigate(['/calculadora-solar'])

      this.service.saveCLient(form);
   
    }else{
      this.ifError = true
    }

}

}
