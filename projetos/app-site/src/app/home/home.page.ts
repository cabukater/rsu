import { ICalcComponent } from './../i-calc/i-calc.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalculadoraService } from '../calculadora/calculadora.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;
  ifError = false;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    private router: Router,
    public service: CalculadoraService,
    public modalController: ModalController

  ) {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      nome: new FormControl(),
      tel: new FormControl(),
      pagina: new FormControl('Calculadora')

   }) 
  }

  painelSolar(){
    this.router.navigate(['/painel-solar'])
  }
  iluminacaoProf(){
    this.router.navigate(['/iluminacao-profissional'])
  }
  outrosServ(){
    this.router.navigate(['/outros-servicos'])
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

  async openCalc() {
   
  }
}
