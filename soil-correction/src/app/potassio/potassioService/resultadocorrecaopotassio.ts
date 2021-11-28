import { INutrienteAdicional } from "src/app/shared/INutrienteAdicional";

export interface ResultadoCorrecaoPotassio{
    qtdAplicar: number;
    custoHa: number;
    nutrientesAdicionais?: INutrienteAdicional[];
}