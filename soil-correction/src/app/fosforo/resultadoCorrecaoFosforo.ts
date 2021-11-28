import { INutrienteAdicional } from "../shared/INutrienteAdicional";

export interface ResultadoCorrecaoFosforo{
    qtdAplicar: number;
    custoHa: number;
    nutrientesAdicionais?: INutrienteAdicional[];
}