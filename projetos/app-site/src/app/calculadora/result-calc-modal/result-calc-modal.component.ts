import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-result-calc-modal',
  templateUrl: './result-calc-modal.component.html',
  styleUrls: ['./result-calc-modal.component.scss'],
})
export class ResultCalcModalComponent implements OnInit {
  @Input() obj: any;
  @Input() dados: any;
  url = 'https://meufinanciamentosolar.com.br/?utm_campaign=Google_Ads_-_Pesquisa_Financiamento&utm_content=financiamento&utm_source=google_ads&utm_medium=cpc&placement=Conta_MFS&device=c&campaignid=11285682462&adgroupid=107576346861&adid=474422970418&network=g&utm_term=financiamento%20solar&gclid=CjwKCAiAxeX_BRASEiwAc1QdkW5YYf0xeqjAPaQ_IKsknGDFCUFvKYy8vv168Zbmi55QZtq_4fDL-BoCeygQAvD_BwE'

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.obj)
   
  }
  modalDismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
