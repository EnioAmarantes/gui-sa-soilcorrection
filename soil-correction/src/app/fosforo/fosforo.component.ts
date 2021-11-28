import { Component, OnInit } from '@angular/core';

import { EFonteFosforo } from './EFonteFosforo';
import { Fosforo } from './fosforo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultadoCorrecaoFosforo } from './resultadoCorrecaoFosforo';
import { CorrecaoFosforo } from './correcaofosforo';
import { CorrecaoFosforoService } from './correcaoFosforo.service';

@Component({
  selector: 'app-fosforo',
  templateUrl: './fosforo.component.html',
  styleUrls: ['./fosforo.component.css']
})
export class FosforoComponent implements OnInit {

  FonteFosforo = EFonteFosforo;
  fosforo: Fosforo;
  resultadoCorrecaoFosforo: ResultadoCorrecaoFosforo;

  constructor(private correcaoFosforoService: CorrecaoFosforoService ) {
    this.fosforo = new Fosforo();
    this.resultadoCorrecaoFosforo = {qtdAplicar: 0, custoHa: 0};
   }

  ngOnInit(): void {
  }

  CalculaResultado():void {
    const correcaoDados = new CorrecaoFosforo(
      9,
      EFonteFosforo.SUPERFOSFATO_SIMPLES,
      100,
      70
    );
     this.resultadoCorrecaoFosforo = this.correcaoFosforoService.getCorrecaoFosforo(correcaoDados);
  }

  TestaService(): void {
    this.correcaoFosforoService.testaService();
  }

}
