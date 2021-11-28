import { EFonteFosforo } from "./EFonteFosforo";

export class Fosforo {
    teorAtingir: number;
    fonteUtilizar: EFonteFosforo;
    eficiencia: number;
    constructor(){
        this.teorAtingir = 0.0;
        this.fonteUtilizar = EFonteFosforo.SUPERFOSFATO_SIMPLES;
        this.eficiencia = 0.0;
    }

    kgaHa(): number {
        return 0.0;
    }
}