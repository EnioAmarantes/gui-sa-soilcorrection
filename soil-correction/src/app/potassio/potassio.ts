import { Calculo } from "../shared/calculo";

export class Potassio implements Calculo {
    partCTC: number;
    desCTC: number;
    posCTC: number;
    idealCTC: number;
    fonteUsar: number;

    constructor() {
        this.desCTC = 0.0;
        this.partCTC = 0.0;
        this.posCTC = 0.0;
        this.idealCTC = 0.0;
        this.fonteUsar = 0;
    }
    
    qtdAplicar(): number {
        return 0.0;
    }
    custoHectar(): number {
        return 0.0;
    }
}