import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalculadoraService } from 'src/app/calculadora/calculadora.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mapa-form',
  templateUrl: './mapa-form.component.html',
  styleUrls: ['./mapa-form.component.scss'],

})
export class MapaFormComponent  {
  form: FormGroup;
  ifError = false;
  constructor(
    private router: Router,
    public service: CalculadoraService,
    public modalController: ModalController

  ) {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      nome: new FormControl(),
      tel: new FormControl(),
      pagina: new FormControl('Contato')
   }) 
  }
  
  saveUSer(form){
    if (this.form.valid){
      this.ifError = false
      this.service.saveCLient(form);
     
      Swal.fire(
        'Contato enviado!',
        'Em breve entraremos em contato',
        'success'
      )
      this.form.reset()
   
    }else{
      this.ifError = true
    }

}
  
}
