import { ICalculoFotoVoltaico } from './i-calculo-foto-voltaico';

    export class CalculoFotoVoltaico implements ICalculoFotoVoltaico{
        constructor(
            public contaEnergia: number,
            public energiaGerada: number,
            public valorTarifa: number,
            public hsp: number,
            public qtdModulos: any,
            public potenciaModulo: number,
            public areaModulo: number,
            public rendimentoModulo: number,
            public taxaDisponibilidade: number,
            public energiaAnualGerada: number,
            public valorOrcamento: number,
            public precoKwp: number,
            public  quantModulos: number,
            public despesaViagema: number
        ){};

        execute(): any{
            let contaEnergia = this.contaEnergia;
            let energiaGerada = this.energiaGerada;
            let valorTarifa = this.valorTarifa;
            let hsp = this.hsp;
            let potenciaModulo = this.potenciaModulo;
            let areaModulo = this.areaModulo;
            let rendimentoModulo = this.rendimentoModulo;
            let taxaDisponibilidade = this.taxaDisponibilidade;         
            let precoKwp = this.precoKwp;
            let quantidadeModulos = this.quantModulos;
            let valorEconomizadoDezAnos :number;

            let potenciaGeradorSolar: number;
            let areaInstalacao: number;
            let energiaGeradaAnual: number;
            let qtdModulos = this.qtdModulos;
            let valorPrevistoSistema: number;
            let precoMinOrcamento: number;
            let precoMaxOrcamento: number;
            let precoMaxOrcamentoTmp: number;
            let kwp: number;
            let valor: number;
            let valorEconomiaMensal: number;
            let valorEconomizadoTrintaAnos: number;
            let minPrecoKwp: number;
            let despesaViagem = this.despesaViagema;

            quantidadeModulos = Math.ceil((energiaGerada * 12) / (hsp * areaModulo * rendimentoModulo * 365));
            potenciaGeradorSolar = (qtdModulos * potenciaModulo) / 1000;
            areaInstalacao = qtdModulos * areaModulo;
            energiaGeradaAnual = energiaGerada * 12;
            valorPrevistoSistema =   potenciaGeradorSolar;

            kwp = potenciaGeradorSolar;

            if (kwp < 1.31 ) {
                valor = 6000.89;
            } else if (kwp < 1.50 ) {
                valor = 6163.39;        
        } else if (kwp < 1.80 ) {
            valor = 6700.39;
        } else if (kwp < 2.68 ) {
                valor = 14842.57;
            } else if (kwp <= 2.76 ) {
                valor = 8121.00;
            } else if (kwp <= 2.8 ) {
                valor = 11681.78;
            } else if (kwp <= 3.24 ) {
                valor = 15937.39;
            } else if (kwp <= 3.35 ) {
                valor = 16752.22;
            } else if (kwp <= 3.64 ) {
                valor = 16690.78;
            } else if (kwp <= 4.02 ) {
                valor = 19107.95;
            } else if (kwp <= 4.05 ) {
                valor = 17.7777;
            } else if (kwp <= 7.15 ) {
                valor = 39114.45;
            } else if (kwp <= 7.80 ) {
                valor = 43651.65;
            } else if (kwp <= 8.45 ) {
                valor = 46487.40;
            } else if (kwp <= 9.10 ) {
                valor = 48566.95;
            } else if (kwp <= 9.75 ) {
                valor = 51213.65;
            } else if (kwp <= 10.40 ) {
                valor = 53143.45;
            }else if (kwp <= 11.70 ) {
                valor = 68641.57;
            } else if (kwp <= 13.00 ) {
                valor = 75979.20;
            } else if (kwp <= 14.08 ) {
                valor = 80974.59;
            } else if (kwp <= 14.30 ) {
                valor = 78765.69;
            } else if (kwp <= 15.60 ) {
                valor = 83352.15;
            } else if (kwp <= 16.90 ) {
                valor = 90978.32;
            } else if (kwp <= 17.92 ) {
                valor = 94575.10;
            } else if (kwp <= 19.20 ) {
                valor = 102813.85;
            } else if (kwp > 19.20 ) {
                minPrecoKwp = 5302.56;
                valor = kwp * minPrecoKwp ;
                precoKwp = 6000.67;
            }

            precoMinOrcamento = (valor + 250 + kwp * precoKwp);
            precoMaxOrcamentoTmp = (valor + 250 + kwp * precoKwp + this.despesaViagema) ;
            precoMaxOrcamento = precoMaxOrcamentoTmp;
            if ( despesaViagem ) {
                precoMaxOrcamento = despesaViagem;
            }
            console.log(valorPrevistoSistema.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
           
             valorEconomiaMensal = valorTarifa * ( energiaGeradaAnual / 12);
            valorEconomizadoDezAnos = 150 * valorEconomiaMensal;
            valorEconomizadoTrintaAnos = 300 * valorEconomiaMensal;
            let calcTirVpl = this.calculosTirVpl(valorTarifa, this.calculosTirVpl, precoMinOrcamento);
            return {
                desp: calcTirVpl,
                potenciaKwp: potenciaGeradorSolar.toPrecision(3),
                areaInst: areaInstalacao,
                qtdModulos: qtdModulos,
                precoMax :precoMaxOrcamentoTmp,
                energiaGeradaAnual: energiaGeradaAnual.toPrecision(6),
                valorEconomizadoTrintaAnos: valorEconomizadoTrintaAnos.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }),
            
                valorEconomiaMensal: valorEconomiaMensal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                precoMinOrcamento: precoMinOrcamento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                precoMaxOrcamento: precoMaxOrcamento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                resultFinalInvestDez:  (valorEconomizadoDezAnos - precoMaxOrcamento).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                resultFinalInvest:  (valorEconomizadoTrintaAnos - precoMaxOrcamento).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
            };

        };

        calculosTirVpl(fvalorTarifa, cenergiaGeradaAnual, cprecoMinOrcamento): any {
            /**
             * @var premissas
             */
            let reajusteAnualTarifa = 0.08;
            let taxaInflacaoAnual = 1.000007;
            let taxaAnualOeM = 0.0025;
            let perdaRendimentoAnualA = 0.005;
            let perdaRendimentoAnualB = 0.995;
            let custoInversor = 2949.00;

            /**
             * @var temps
             */
            let resultadoFinal = 0;
            let eneGerAnualA = 0;
            let eneGerAnualB = 0;
            let eneGerAnualC = 0;
            let resultEneGerAual = 0;
            let resultFinalInvest = 85000;
            let custoOeM = 0;
            let receitaAnualFv = 0;
            let receitaLiquidaAnual = 0;
            custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento );

            for (let ano = 0; ano < 23; ano++) {
                eneGerAnualA = cenergiaGeradaAnual * perdaRendimentoAnualA;
                eneGerAnualB = cenergiaGeradaAnual * perdaRendimentoAnualB;
                eneGerAnualC = eneGerAnualB - eneGerAnualA;
                if (ano < 1) {
                    resultFinalInvest = fvalorTarifa * eneGerAnualC;
                }
                if (resultEneGerAual > 0) {
                    eneGerAnualC = resultEneGerAual;
                }
                resultEneGerAual = eneGerAnualC * perdaRendimentoAnualB;
                fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;
                custoOeM = custoOeM + (0.07 * custoOeM);
                
                if (ano === 22) {
                    for (let anox = 0; anox < 1; anox++) {
                        fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;
                        custoOeM = custoOeM + (0.07 * custoOeM);
                    }
                }
                resultadoFinal = fvalorTarifa * eneGerAnualC;
                resultFinalInvest -= resultadoFinal;
            
            }
            resultFinalInvest = (resultFinalInvest * -1) - custoInversor;
            receitaAnualFv = fvalorTarifa * parseInt(resultEneGerAual.toPrecision(5));
            receitaLiquidaAnual = (fvalorTarifa * parseInt(resultEneGerAual.toPrecision(5))) - custoOeM;
            return {
                fvalorTarifa: fvalorTarifa,
                resultEneGerAual: parseInt(resultEneGerAual.toPrecision(5)),
                receitaAnualFv: receitaAnualFv.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                custoOeM: custoOeM.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                receitaLiquidaAnual: receitaLiquidaAnual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                resultFinalInvest: resultFinalInvest
                
            };
           
        };

        regexDecimal(arg): any {
            const regex = /[0-9]+/g;
            const str = arg;
            let m;
            let temp = '';

            while ((m = regex.exec(str)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                m.forEach((match, groupIndex) => {
                    console.log(`Found match, group ${groupIndex}: ${match}`);
                    temp = temp+ '' + match;
                });
            }
            return parseInt(temp);
        }
    }
