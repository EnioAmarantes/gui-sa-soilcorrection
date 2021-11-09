import { Calculo } from "../shared/calculo";
import { FonteFosforo } from "./fontes/FonteFosforo";
import { FontesFosforo } from "./fontes/fontes-fosforo";

export class Fosforo implements Calculo {
    teorAtingir: number;
    fonteUtilizar: FonteFosforo;
    eficiencia: number;
    constructor(){
        this.teorAtingir = 0.0;
        this.fonteUtilizar = FontesFosforo[0];
        this.eficiencia = 0.0;
    }
    qtdAplicar(): number {
        return 0.0;
    }
    custoHectar(): number {
        return 0.0;
    }

    kgaHa(): number {
        return 0.0;
    }
}