import { Component, OnInit } from '@angular/core';

import { ModalController, NavController, NavParams } from '@ionic/angular';
import {MenuMobileComponent} from '../menu-mobile/menu-mobile.component'
@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent  {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
  ) {
    console.log('Hello HeaderMobileComponent Component');
   
  }

  async  openMenuMobile() {
    const modal = await this.modalCtrl.create({
      component: MenuMobileComponent
  });

  modal.present();
  }

}
