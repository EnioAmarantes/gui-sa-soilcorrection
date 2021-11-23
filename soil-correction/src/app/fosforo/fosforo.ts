import { Calculo } from "../shared/calculo";
import { EFonteFosforo } from "./EFonteFosforo";

export class Fosforo implements Calculo {
    teorAtingir: number;
    fonteUtilizar: EFonteFosforo;
    eficiencia: number;
    constructor(){
        this.teorAtingir = 0.0;
        this.fonteUtilizar = EFonteFosforo.SUPERFOSFATO_SIMPLES;
        this.eficiencia = 0.0;
    }
    qtdAplicar(): number {
        return 0.0;
    }
    custoHectar(): number {
        return 100;
    }

    kgaHa(): number {
        return 0.0;
    }
}