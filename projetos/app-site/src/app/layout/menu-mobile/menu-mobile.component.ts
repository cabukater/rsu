
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams
  , AlertController,  ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    public navParams: NavParams,
    public modal: ModalController,
    public alertCtrl: AlertController,
    private router: Router

  ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}
  quemSomos(){
    this.router.navigate(['/quem-somos'])
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
contato(){
  this.router.navigate(['/contato'])
}

}
