import { Component, OnInit } from '@angular/core';
import { EFontePotassio } from './EFontepotassio';
import { Potassio } from './potassio';
import { CorrecaoPotassio } from './potassioService/correcaopotassio';
import { PotassioServiceService } from './potassioService/potassio-service.service';
import { ResultadoCorrecaoPotassio } from './potassioService/resultadocorrecaopotassio';

@Component({
  selector: 'app-potassio',
  templateUrl: './potassio.component.html',
  styleUrls: ['./potassio.component.css']
})
export class PotassioComponent implements OnInit {

  FontePotassio = EFontePotassio;
  potassio: Potassio;
  resultadoPotassio: ResultadoCorrecaoPotassio;

  constructor(private potassioService: PotassioServiceService) {
    this.potassio = new Potassio();
    this.resultadoPotassio = {
      qtdAplicar: 0,
      custoHa: 0
    }
   }

  ngOnInit(): void {
  }

  CalculaResultado(){
    const correcaoDados = new CorrecaoPotassio(
      0.15,
      EFontePotassio.CLORETO_POTASSIO,
      1.2,
      1.4,
      100
    );

    this.resultadoPotassio = this.potassioService.getCorrecaoPotassio(correcaoDados);
  }

}
