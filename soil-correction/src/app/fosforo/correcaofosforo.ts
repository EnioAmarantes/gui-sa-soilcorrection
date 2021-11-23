import { EFonteFosforo } from "./EFonteFosforo";

export class CorrecaoFosforo {
    teor: number;
    fonteFosforo: EFonteFosforo;
    custoFonte: number;
    eficiencia: number;
    constructor(teor: number, fonteFosforo: EFonteFosforo, custoFonte: number, eficiencia: number){
        this.teor = teor;
        this.fonteFosforo = fonteFosforo;
        this.custoFonte = custoFonte;
        this.eficiencia = eficiencia;
    }

    getTeor(): number{
        return this.teor;
    }

}