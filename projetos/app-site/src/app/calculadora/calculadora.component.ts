import { firebase } from './../../environments/environment';
import { async } from '@angular/core/testing';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { ResultCalcModalComponent } from './result-calc-modal/result-calc-modal.component';
import { CalculadoraService, Estado } from './calculadora.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CalculoFotoVoltaico } from './CalculoFotoVoltaico';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  estados: any;
  cidades: any [] = [];
  distribuidora: any = {};
  kwhInput: any = {};
  showCidades = false;
  showEstados = false;
  element: HTMLElement;
  carroEletrico: any;
  mCarroEletrico: any;
  reducaoCo: any;
  mReducaoCo: string;
  arvoresPlantadas: number;
  mArvoresPlantadas: number;
  contaEnergia: number;
  energiaGerada: number;
  valorTarifa: number;

  $uf: any;
  $btn: any;
  $hidden: any;

  //  @todo parametros do sistema
  //=============================================

  hsp = 4.27;
  potenciaModulo = 325;
  areaModulo = 1.92;
  rendimentoModulo = 0.1674;
  taxaDisponibilidade = 50;
  valorOrcamento = 44889.31;
  precoKwp = 6695.58;
  despesaViagema: number;
  energiaAnualGerada: number;
  qtdModulos: any;
  areaInstalacao: any;
  mPrecoMaxOrcamento: any;
  geracaoAnual: any;
  mGeracaoAnual: any;
  tamanhoSistema: any;
  mTamanhoSistema: any;
  mQtdModulos: any;
  economialMensal: any;
  mEconomialMensal: any;
  economiaTrintaAnos: any;
  economiaDezAnos: number;
  mEconomiaTrintaAnos: any;
  precoMinOrcamento: any;
  mPrecoMinOrcamento: any;
  precoMaxOrcamento: any;
  mAreaInstalacao: any;
  loading: HTMLIonLoadingElement;
  constructor(
    public loadingController: LoadingController,
    @Inject(DOCUMENT) document,
    private firebase: AngularFireDatabase,

    private modalCtrl: ModalController,
    private service: CalculadoraService
  ) { }

  ngOnInit() {
    
  }

  getEstados(){
    this.presentLoading();
    this.service.getEstados().subscribe(
      data => {
        this.estados = data;
        console.log(this.estados.data);
        this.loaderDismiss()
      })
      this.loaderDismiss()
  }

  onchangeValueMedia(event){
    
    if(event.target.value != null || event.target.value == 0 ){

      this.getEstados();

      this.showEstados = true;
   
    }else{
      this.showEstados = false;
      this.showCidades = false;
      
    }
    
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      duration: 2000,
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
      message: 'Carregando...',
    //  duration: 2000
    });
   this.loading.present();

    console.log('Loading dismissed!');
  }

  onSelectEstado(event) {
    let uf = event.target.value;
    this.showCidades = true
   // this.presentLoading();
    console.log(event.target.value)
  
  this.service.getCidades(uf)
  this.cidades = this.service.cidades
  console.log(this.cidades)
 
  }

  async loaderDismiss(){
    const { role, data } = await this.loading.onDidDismiss();

 }
  onSelectcidade(event) {
    let $kwh = this.kwhInput;

    switch ($kwh) {
      case '':
        console.log($kwh + ' - case01');
        break;
      case null:
        console.log($kwh + ' - case02');
        break;
      case NaN:
        console.log($kwh);
        break;
      default:

    }
  }

  getREsults() {
    this.resultado(this.kwhInput, 0);
    let k = this.kwhInput;
    console.log(k)
    let kmtotal = 12 * (k / 5.565);
    this.carroEletrico = Math.round(kmtotal);
    this.mCarroEletrico = Math.round(kmtotal);
    console.log(this.distribuidora);

    let regexs = new CalculoFotoVoltaico(
      this.contaEnergia, this.energiaGerada,
      this.valorTarifa, this.hsp,
      this.potenciaModulo, this.areaModulo,
      this.rendimentoModulo, this.taxaDisponibilidade,
      this.energiaAnualGerada, this.valorOrcamento, this.precoKwp, this.despesaViagema
    );
    this.valorTarifa = this.distribuidora;
    this.energiaGerada = regexs.regexDecimal(this.kwhInput);
    //energiaGerada = +(<HTMLInputElement>document.getElementById('kwh')).value;
    this.contaEnergia = this.energiaGerada * this.valorTarifa;

    let calculo = new CalculoFotoVoltaico(
      this.contaEnergia, this.energiaGerada,
      this.valorTarifa, this.hsp,
      this.potenciaModulo, this.areaModulo,
      this.rendimentoModulo, this.taxaDisponibilidade,
      this.energiaAnualGerada, this.valorOrcamento, this.precoKwp, this.despesaViagema
    );

    let obj: any;
    obj = calculo.execute();
    this.energiaGerada = regexs.regexDecimal(this.energiaGerada);
    console.log(obj);
    console.log(this.energiaGerada);
    this.presentModal(obj)
    this.geracaoAnual = obj.energiaGeradaAnual;
    this.mGeracaoAnual = obj.energiaGeradaAnual;
    this.tamanhoSistema = obj.potenciaKwp;
    this.mTamanhoSistema = obj.potenciaKwp;
    this.qtdModulos = obj.quantModulos;
    this.mQtdModulos = obj.quantModulos;
    this.economialMensal = obj.valorEconomiaMensal;
    this.mEconomialMensal = obj.valorEconomiaMensal;
    this.economiaTrintaAnos = obj.resultFinalInvest;
    this.economiaDezAnos = obj.resultFinalInvestDez;
    this.mEconomiaTrintaAnos = (obj.valorEconomizadoTrintaAnos - obj.precoMaxOrcamento);
    this.precoMinOrcamento = obj.precoMinOrcamento;
    this.mPrecoMinOrcamento = obj.precoMinOrcamento;
    this.precoMaxOrcamento = obj.precoMaxOrcamento;
    this.mPrecoMaxOrcamento = obj.precoMaxOrcamento;
    this.areaInstalacao = obj.areaInst.toPrecision(3);
    this.mAreaInstalacao = obj.areaInst.toPrecision(3);
  }

  resultado(objeto, indice) {
    const valores = new Array(14);
    valores[0] = 0.000084; // energia eletrica
    valores[1] = 0.07;
    valores[2] = 0.004;
    valores[3] = 0.00090;
    valores[4] = 0.00120;
    valores[5] = 0.0001809;
    valores[6] = 0.0002139;
    valores[7] = 0.00025;
    valores[8] = 0.00005;
    valores[9] = 0.00007;
    valores[10] = 0.0001892;
    valores[11] = 0.00031;
    valores[12] = 0.00030;
    valores[13] = 0.00013;
    valores[14] = 0.00003;
    let result = objeto * valores[indice];
    this.total(result);
  }
  total(arg) {
    let soma = 0;
    let hiddens = arg;
    for (let a = 0; a < hiddens; a++) {
      if (hiddens) {
        let valoratual = eval(hiddens);
        soma = soma + valoratual * 12;
      }
    }
    let tco2e = soma * 12;
    //tco2e = 12 * (10 / (soma * 12));
    //document.getElementById("reducao-co").innerHTML = Math.round(tco2e);
    this.reducaoCo = tco2e.toPrecision(3);
    this.mReducaoCo = tco2e.toPrecision(3);
    let arv = 12 * (soma * 3.6);
    this.arvoresPlantadas = Math.round(arv);
    this.mArvoresPlantadas = Math.round(arv);

  }

  async presentModal(obj) {
    let reducaoCo = this.reducaoCo;
    let mReducaoCo = this.mReducaoCo;
    let arvoresPlantadas = this.arvoresPlantadas;
    let energiaGeradaAnual = this.geracaoAnual;
    let mGeracaoAnual = this.mGeracaoAnual;
    let tamanhoSistema = this.tamanhoSistema;
    let mTamanhoSistema = this.mTamanhoSistema;
    let qtdModulos = this.qtdModulos;
    let mQtdModulos = this.mQtdModulos;
    let economialMensal = this.economialMensal;
    let mArvoresPlantadas = this.mArvoresPlantadas;
    let mAreaInstalacao = this.mAreaInstalacao;
    let carroEletrico = this.carroEletrico;
    let mCarroEletrico = this.mCarroEletrico;
    let areaInstalacao= this.areaInstalacao;
  const modal = await this.modalCtrl.create({
    component: ResultCalcModalComponent,
    cssClass: 'my-custom-class',
    swipeToClose: true,
    componentProps: {
      obj,
      dados: {
        reducaoCo,
        mReducaoCo,
        arvoresPlantadas,
        mArvoresPlantadas,
        tamanhoSistema,
        qtdModulos,
        mTamanhoSistema,
        mGeracaoAnual,
        mCarroEletrico,
        carroEletrico,
        mQtdModulos,
        areaInstalacao,
        mAreaInstalacao
      }
      },
      presentingElement: await this.modalCtrl.getTop() // Get the top-most ion-modal
    });
  return await modal.present();
}

}
