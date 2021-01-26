import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-i-calc',
  templateUrl: './i-calc.component.html',
  styleUrls: ['./i-calc.component.scss'],
})
export class ICalcComponent implements OnInit {

  constructor(
    public modal: ModalController
  ) {

   }

  ngOnInit() {}

  fechar() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modal.dismiss({
      'dismissed': true
    });
  }

}
