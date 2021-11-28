import { EFontePotassio } from "../EFontepotassio";

export class CorrecaoPotassio {
    teor: number;
    fontePotassio: EFontePotassio;
    participacaoAtual: number;
    participacaoDesejada: number;
    custoFonte: number

    constructor(teor: number, fontePotassio: EFontePotassio, participacaoAtual: number, participacaoDesejada: number, custoFonte: number){
        this.teor = teor;
        this.fontePotassio = fontePotassio;
        this.participacaoAtual = participacaoAtual;
        this.participacaoDesejada = participacaoDesejada;
        this.custoFonte = custoFonte;
    }

    getTeor(): number{
        return this.teor;
    }

}