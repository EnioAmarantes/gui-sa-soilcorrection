import { CultiveSystem } from './cultive-system';
import { GeneralData } from './general-data';
import { SoilTexture } from './soil-texture';

describe('GeneralData', () => {
  it('should create an instance', () => {
    expect(new GeneralData()).toBeTruthy();
  });

  it('should show Tipo Argiloso', () => {
    let dadosGerais = new GeneralData()
    expect(dadosGerais.tipo()).toEqual('Argiloso + 40% de argila');
  });

  it('should show Textura Media', () => {
    let dadosGerais = new GeneralData();
    dadosGerais.texturaSolo = SoilTexture.TexturaMedia;
    expect(dadosGerais.tipo()).toEqual('Argiloso + 25 a 40% de argila');
  });

  it('should show nothing to Tipo', () => {
    let dadosGerais = new GeneralData();
    dadosGerais.texturaSolo = 3;
    expect(dadosGerais.tipo()).toEqual('');
  });

  
  it('should show cultiveSystem Plantio Direto', () => {
    let dadosGerais = new GeneralData();
    expect(dadosGerais.cultiveSystem()).toEqual('Plantio Direto');
  });

  
  it('should show cultiveSystem Convencional', () => {
    let dadosGerais = new GeneralData();
    dadosGerais.sistemaCultivo = CultiveSystem.CONVENCIONAL;
    expect(dadosGerais.cultiveSystem()).toEqual('Convencional');
  });

  
  it('should show nothing to cultiveSystem', () => {
    let dadosGerais = new GeneralData();
    dadosGerais.sistemaCultivo = 3;
    expect(dadosGerais.cultiveSystem()).toEqual('');
  });
});
