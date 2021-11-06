import { CultiveSystem } from "./cultive-system";
import { GeneralDataInterface } from "./general-data.interface";
import { SoilTexture } from "./soil-texture";

export class GeneralData implements GeneralDataInterface {
    constructor() {

    }

    produto: string = "";
    data: Date = new Date();
    municipio: string = "";
    lote: string = "";
    area: number = 0.0;
    talhao: number = 0.0;
    talhaoArea: number = 0.0;
    matriculaLote: number = 0.0;
    texturaSolo: SoilTexture = SoilTexture.Argiloso;
    sistemaCultivo: CultiveSystem = CultiveSystem.PLANTIO_DIRETO;
    responsavelTecnico: string = "";
    profAmostraSolo: number = 0.0;
    resultadoAnaliseSolo: number = 0.0;

    tipo(): string {
        switch (this.texturaSolo) {
            case SoilTexture.Argiloso:
                return "Argiloso + 40% de argila";
            case SoilTexture.TexturaMedia:
                return "Argiloso + 25 a 40% de argila";
            default:
                return "";
        }
    }

    cultiveSystem(): string {
        switch (this.sistemaCultivo) {
            case CultiveSystem.PLANTIO_DIRETO:
                return "Plantio Direto";
            case CultiveSystem.CONVENCIONAL:
                return "Convencional";
            default:
                return "";
        }
    }
}
