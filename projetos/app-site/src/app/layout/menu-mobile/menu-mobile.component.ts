
import { Component, Injectable, OnInit } from '@angular/core';
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

  ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}

  sair() {
    const alert = this.alertCtrl.create({
      message: 'Até Breve',

      buttons: [{
        text: 'ok'

      }],

    });
    alert.finally();
  }

}
