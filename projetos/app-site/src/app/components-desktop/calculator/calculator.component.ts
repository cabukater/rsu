import { CalculatorService } from './calculator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})

  export class CalculatorComponent implements OnInit {
  ec25Anospv: any;
 form

    constructor(
      private fb: FormBuilder,
      private calculatorService : CalculatorService
    ) {

      this.form = this.fb.group({
        tclassificacao:new FormControl( 20),
        tligacao: new FormControl(10),
        tconta: new FormControl(30)

      });
      var tstring = this.form.controls.get['tclassificacao'].value + "%" + tligacao + "%" + tconta;
    }
  
    ngOnInit() {
      /*calculatorService.getStates().subscribe((data ) =>{
         console.log(data)
      })*/
   
       this.simuladorSolar();

  }

// Função para realizar todos os cálculos
simuladorSolar() {

	// Formatar como dinheirinho
	var formatter = new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'});
		// formatter.format(2500);   /* R$2,500.00 */

// Realizar cálculos

/*	var conta = document.getElementById("conta").value;*/
	var end_url = window.location.href;
	var taxa_icms = Number(end_url.substring(62, 60));
	var custodisp = Number(end_url.substring(66, 63));
	var conta = Number(end_url.substring(72, 67));
	
	var tarifaComICMS, tarifaSemICMS, parcelaICMS;
	var TE = 0.246500; // tarifa da Elektro em 06/08/2020
	var TUSD = 0.285370;
	var TEcICMS, TEsICMS, TUSDcICMS, TUSDsICMS;

	TEcICMS = TE / (1 - (0.05 + (taxa_icms / 100)));
	TEsICMS = TE / (1 - (0.05));

	TUSDcICMS = TUSD / (1 - (0.05 + (taxa_icms / 100)));
	TUSDsICMS = TUSD / (1 - (0.05));
	
	tarifaComICMS = TEcICMS + TUSDcICMS;
	tarifaSemICMS = TEsICMS + TUSDsICMS;
	parcelaICMS = TEcICMS - TEsICMS;

	var contaSemSolar;

	// Cálculo do valor da conta de luz sem energia solar
	contaSemSolar = calcularContaSemSolar(conta);
/*	document.getElementById("contaSemSolar-p-v").innerHTML = formatter.format(contaSemSolar[0]); // imprime conta sem solar 1ª ano*/
	document.getElementById("contaSemSolar-p-v").innerHTML = formatter.format(conta); // imprime conta sem solar 1ª ano

	var consumoMensal;

	consumoMensal = Math.round(conta / tarifaComICMS);
	var consumoMensalp = consumoMensal + " kWh";
	document.getElementById("consumo-p").innerHTML = consumoMensalp; // imprime consumo médio

/*	var custodisp = document.getElementById("ligacao").value;*/
	var abativel;

	// Cálculo do consumo abatível
	abativel = consumoMensal - custodisp;
	var abativelp = abativel + " kWh";
	document.getElementById("abativel-p").innerHTML = abativelp; // imprime consumo abatível

	var potSugerida, qntdModulos, area, potTotal;

	var capacidadeGer = 1400;
	var potModulos = 0.4;
	
	// Cálculo da quantidade de placas, potência total (considerando consumo abatível) e área
	potSugerida = abativel * 12 / capacidadeGer;
	qntdModulos = Math.round(potSugerida / potModulos);
	document.getElementById("qntdModulos-p").innerHTML = qntdModulos; // imprime qntd de módulos

	area = qntdModulos * 2;
	var areap = area + " m²";
	document.getElementById("area-p").innerHTML = areap; // imprime a área
	
	potTotal = qntdModulos * potModulos;
	var potTotalp = potTotal.toPrecision(3) + " kWp";
	document.getElementById("potTotal-p").innerHTML = potTotalp; // imprime potência total

	var prodMensal, prodAnual;

	// Cálculo de quanta energia será produzida (mensal e anual)
	prodMensal = Math.round((potTotal * capacidadeGer) / 12);
	var prodMensalp = prodMensal + " kWh";
	document.getElementById("prodMensal-p").innerHTML = prodMensalp; // imprime produção mensal 1º mes
	
	prodAnual = prodMensal * 12;
	var prodAnualp = prodAnual + " kWh";

/*	var taxa_icms = document.getElementById("class").value;*/

	var contaComSolar;
	// Cálculo do valor mínimo da conta de luz
	contaComSolar = calcularContaMinima(prodMensal,consumoMensal,custodisp,tarifaComICMS,tarifaSemICMS,parcelaICMS);
	document.getElementById("contaMinima-p").innerHTML = formatter.format(contaComSolar[0]); // imprime conta minima

	var economiaMensal;
	// Cálculo da economia (mensal e anual)
	economiaMensal = calcularEconomia(contaSemSolar,contaComSolar);
	document.getElementById("ecMensal-p-v").innerHTML = formatter.format(economiaMensal[0]); // imprime economia mensal
	document.getElementById("ecAnual-p-v").innerHTML = formatter.format(economiaMensal[0] * 12); // imprime economia anual

	var custoOeM;
	// Cálculo do custo com OeM
	var economiaAno = economiaMensal[0] * 12;
	custoOeM = calcularOeM(potTotal,economiaAno);

	var porcentReducao;
	// Cálculo da porcentagem de redução
	porcentReducao = calcularPorcentReducao(contaSemSolar,contaComSolar);
	document.getElementById("porcentReducao-p-v").innerHTML = toPercent(porcentReducao[0]); // imprime % de reducao

	var economia25;
	// Cálculo da economia (em 25 anos)
	economia25 = calcularEconomia25Anos(economiaMensal);
	document.getElementById("ec25Anos-p-v").innerHTML = formatter.format(economia25[24]); // imprime economia em 25 anos

	var energiaCompens;
	// Cálculo de quanta energia será compensada
	energiaCompens = calcularEnergiaCompens(abativel,prodMensal);

	var tarGer;

	tarGer = calcularPrecoEnergiaCompens(contaSemSolar,contaComSolar,energiaCompens);
	document.getElementById("tarGer-p-v").innerHTML = formatter.format(tarGer[0]); // imprime tarifa de "venda"
	document.getElementById("tarifaComICMS-p").innerHTML = formatter.format(tarifaComICMS); // imprime tarifa de compra

	// Calcular faixa de preços
        // multipliquei todos os preços de equipamentos do
        // relatório da greener por 1,30 por causa da inflação do dolar

	if(potTotal < 2) {
		menorPreco = (4549.38 + 1397) * potTotal; 
		maiorPreco = (4549.38 + 2770) * potTotal; 
	} else if(potTotal < 4) {
		menorPreco =  (3917.25 + 997) * potTotal; /*(PROD + SERV) NP ENERGIA*/
		maiorPreco =  (5749.64 + 1960) * potTotal; /*(PROD + SERV) GREENER*/
	} else if(potTotal < 8) {
		menorPreco =  (3519.88 + 797) * potTotal;
		maiorPreco =  (4745.63 + 1560) * potTotal;
	} else if(potTotal < 12) {
		menorPreco =  (3490.80 + 747) * potTotal;
		maiorPreco =  (4115.75 + 1410) * potTotal;
	} else if(potTotal < 30) {
		menorPreco =  (3563.85 + 697) * potTotal;
		maiorPreco =  (4000.70 + 1340) * potTotal;
	} else if(potTotal < 50) {
		menorPreco =  (3440.03 + 697) * potTotal;
		maiorPreco =  (3816.41 + 1340) * potTotal;
	} else {
		menorPreco =  (3152.50 + 597) * potTotal;
		maiorPreco =  (3639.82 + 1190) * potTotal;
	}
  
	var faixaPreco = "";

	var menorPreco, maiorPreco;
    
	faixaPreco = formatter.format(menorPreco) + " a " + formatter.format(maiorPreco);
	document.getElementById("faixaPreco-p").innerHTML = faixaPreco;

	var saldo;
	// Calcular saldo (lucro líquido) do investimento
	saldo = calcularSaldoFinal(economiaMensal,maiorPreco);

	var valorfinalPoup, valorfinalTesouro, valorfinalSolar;

	valorfinalSolar = saldo[24];
	document.getElementById("valorfinalSolar-p").innerHTML = formatter.format(valorfinalSolar); // imprime economia em 25 anos
	
	valorfinalPoup = calcularvalorfinalPoup(maiorPreco);
	document.getElementById("valorfinalPoup-p-v").innerHTML = formatter.format(valorfinalPoup[24]); // imprime economia em 25 anos

	valorfinalTesouro = calcularvalorfinalTesouro(maiorPreco);
	document.getElementById("valorfinalTesouro-p-v").innerHTML = formatter.format(valorfinalTesouro[24]); // imprime economia em 25 anos

	this.ec25Anospv =   formatter.format(economia25[24]);; // imprime economia em 25 anos
	document.getElementById("ecAnualpv").innerHTML = formatter.format(economiaMensal[0] * 12); // imprime economia anual
	document.getElementById("contaSemSolarpv").innerHTML = formatter.format(contaSemSolar[0]); // imprime conta sem solar 1ª ano
	document.getElementById("ecAnualpv").innerHTML = formatter.format(economiaMensal[0] * 12); // imprime economia anual
	document.getElementById("qntdModulosp").innerHTML = qntdModulos; // imprime qntd de módulos
	document.getElementById("potTotalp").innerHTML = potTotalp; // imprime potência total
	document.getElementById("prodAnualp").innerHTML = prodAnual + " kWh"; // imprime produção anual
	document.getElementById("contaMinimap").innerHTML = formatter.format(contaComSolar[0]); // imprime conta minima
	document.getElementById("porcentReducaopv").innerHTML = toPercent(porcentReducao[0], null); // imprime % de reducao
	document.getElementById("faixaPrecop").innerHTML = faixaPreco;

	/*
	grafRendimentos(saldo,maiorPreco);

	drawBasic(economia25);

*/
  alert('Simulação realizada com sucesso!');
  
// Função para calcular as contas de luz sem energia solar
function calcularContaSemSolar(conta) {

	var contaSemSolar = [];
	var contaSemSolarr = "";
	var i;

	contaSemSolar[0] = conta;

	for(i = 1; i < 25; i++) {
		contaSemSolar[i] = Math.round(contaSemSolar[i - 1] * (1 + 0.06));
		contaSemSolarr += contaSemSolar[i] + "<br>";

	}

	return contaSemSolar;
}

// Função para calcular o valor mínimo possível da conta de luz
function calcularContaMinima(prodMensal,consumoMensal,cd,tarifaComICMS,tarifaSemICMS,parcelaICMS) {

	var contaComSolar = [];
	var consLocal, injetRede, compra, abate, desconto, cdCobrado;
	var compraD, abateD, descontoD, cdD;

	consLocal = prodMensal * 0.35;
	injetRede = prodMensal - consLocal;

	// Calcular energia comprada (em kWh)
	compra = consumoMensal - consLocal;
	
	// Calcular energia abatida na conta de luz (em kWh)
	if(injetRede > compra) {
		abate = compra;
	} else {
		abate = injetRede;
	}
 var i;
	var abativel;
	abativel = compra - cd;

	// Calcular CD a ser pago (em kWh)
	if(injetRede - abativel <= 0) {
		cdCobrado = 0;
	} else if(injetRede - abativel <= cd) {
		cdCobrado = injetRede - abativel;
	} else {
		cdCobrado = 100;
	}

	// Calcular parcela de desconto ICMS (em kWh)
	desconto = injetRede;

	// Calcular valor mínimo da conta de luz (em reais) = conta com Solar
	compraD = compra * tarifaComICMS;
	abateD = abate * tarifaSemICMS;
	descontoD = desconto * parcelaICMS; // a devolução de ICMS é só sobre a TE
	cdD = cdCobrado * tarifaComICMS;

	contaComSolar[0] = compraD - abateD - descontoD + cdD; 

	for(i = 1; i < 25; i++) {
		contaComSolar[i] = contaComSolar[i - 1] * (1 + 0.06);
	}

	return contaComSolar;
}

// Função para calcular a quantidade de energia compensada
function calcularEnergiaCompens(abativel,prodMensal) {
	
	var energiaCompens = [];
	var energiaCompensr = "";
	var i;

	if (abativel - prodMensal < 0) {
		energiaCompens[0] = abativel;
	} else {
		energiaCompens[0] = prodMensal;
	}
	for(i = 1; i < 25; i++) {
		energiaCompens[i] = Math.round(energiaCompens[i - 1] * (1 - 0.0045));
		energiaCompensr += energiaCompens[i] + "<br>";
	}
	
	return energiaCompens;
	
}

// Função para calcular porcentagem
function toPercent(n, f) {
	
	var percent = parseFloat(n * 100).toFixed(f) + "%";
	
	return percent;
	
}

// Função para calcular o preço da energia gerada/compensada
function calcularPrecoEnergiaCompens(contaSemSolar,contaComSolar,energiaCompens) {
	
	var tarGer = [];
	var tarGerr = "";
	var i;

	for(i = 0; i < 25; i++) {
		tarGer[i] = (contaSemSolar[i] - contaComSolar[i]) / energiaCompens[i];
		tarGerr += tarGer[i] + "<br>";
	}
	
	return tarGer;
	
}

// Função para calcular a economia anual
function calcularEconomia(cs,cc) { // conta sem solar e conta mínima
	
	var economia = [];
	var economiar = "";
	var i;

	for(i = 0; i < 25; i++) {
		economia[i] = cs[i] - cc[i];
		economiar += economia[i] + "<br>";
	}
	
	return economia;
	
}

function calcularEconomia25Anos(ec) {
	
	var economia25 = [];
	var economia25r = "";
	var i;
	
	economia25[0] = ec[0] * 12;
	
	for(i = 1; i < 25 ; i++) {
		economia25[i] = economia25[i-1] + ec[i] * 12;
		economia25r += economia25[i] + "<br>";
	}
	
	return economia25;
	
}

// Função para calcular a porcentagem de redução na conta
function calcularPorcentReducao(cs,cc) {
	var porcentReducao = [];
	var porcentReducaor = "";
	var i;

	for(i = 0; i < 25; i++) {
		porcentReducao[i] = (cs[i] - cc[i])/cs[i];
	}

	return porcentReducao;

}

// Função para calcular o custo com O&M
function calcularOeM(p,e) {
	
	var custoOeM = [];
	var custoOeMr = "";
	var i;

	if(p < 2) {
		custoOeM[0] = 0.14 * e;
	} else if(p < 4) {
		custoOeM[0] = 0.13 * e;
	} else if(p < 8) {
		custoOeM[0] = 0.12 * e;
	} else if(p < 12) {
		custoOeM[0] = 0.11 * e;
	} else if(p < 30) {
		custoOeM[0] = 0.10 * e;
	} else if(p  < 50) {
		custoOeM[0] = 0.09 * e;
	} else {
		custoOeM[0] = 0.08 * e;
	}

	for(i = 1; i < 25; i++) {
		custoOeM[i] = custoOeM[i - 1] * 0.05;
	}
	
	return custoOeM;
	
}

// Função para calcular o saldo final do investimento
function calcularSaldoFinal(e,m) {
	
	var saldo = [];
	var saldor = "";
	var i;

	saldo[0] = e[0] - m;

	for(i = 1; i < 25; i++) {
		saldo[i] = saldo[i - 1] + e[i] * 12;
		saldor += saldo[i] + "<br>";
	}
	
	return saldo;
}

function calcularvalorfinalPoup(maiorPreco) {
	
	var valorfinalPoup = [];
	var valorfinalPoupr = "";
	var i, selic, rendPoupanca;
	
	selic = 0.02;
	rendPoupanca = 0.7 * selic;
	
	valorfinalPoup[0] = maiorPreco;
	
	for(i = 1; i < 25; i++) {
		valorfinalPoup[i] = valorfinalPoup[i - 1] * (1 + rendPoupanca);
		valorfinalPoupr += valorfinalPoup[i] + "<br>";
	}
	
	return valorfinalPoup;
	
}

function calcularvalorfinalTesouro(maiorPreco) {
	
	var valorfinalTesouro = [];
	var valorfinalTesouror = "";
	var i, selic, rendTesouro;
	
	selic = 0.02;
	rendTesouro = selic;
	
	valorfinalTesouro[0] = maiorPreco;
	
	for(i = 1; i < 25; i++) {
		valorfinalTesouro[i] = valorfinalTesouro[i - 1] * (1 + rendTesouro);
		valorfinalTesouror += valorfinalTesouro[i] + "<br>";
	}
	
	return valorfinalTesouro;
	
}

}

  }
  