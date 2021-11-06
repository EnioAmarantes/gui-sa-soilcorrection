import { CultiveSystem } from "./cultive-system";
import { SoilTexture } from "./soil-texture";

export interface GeneralDataInterface {
    produto: string;
    data: Date;
    municipio: string;
    lote: string;
    area: number;
    talhao: number;
    talhaoArea: number;
    matriculaLote: number;
    texturaSolo: SoilTexture;
    sistemaCultivo: CultiveSystem;
    responsavelTecnico: string;
    profAmostraSolo: number;
    resultadoAnaliseSolo: number;
}
