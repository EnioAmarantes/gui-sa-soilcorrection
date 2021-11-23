import { INutrienteAdicional } from "./INutrienteAdicional";

export interface ResultadoCorrecaoFosforo{
    qtdAplicar: number;
    custoHa: number;
    nutrientesAdicionais?: INutrienteAdicional[];
}