import { ICalcComponent } from './../i-calc/i-calc.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    private router: Router,
    public modalController: ModalController

  ) {}

  painelSolar(){
    this.router.navigate(['/painel-solar'])
  }
  iluminacaoProf(){
    this.router.navigate(['/iluminacao-profissional'])
  }
  outrosServ(){
    this.router.navigate(['/outros-servicos'])
  }

  async openCalc() {
    const modal = await this.modalController.create({
      component: ICalcComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
