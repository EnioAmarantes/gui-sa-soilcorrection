import { Component, OnInit } from '@angular/core';

import { CorrecaoFosforoService } from './correcaofosforo.service';
import { EFonteFosforo } from './EFonteFosforo';
import { Fosforo } from './fosforo';
import { ResultadoCorrecaoFosforo } from './resultadoCorrecaoFosforo';
import { CorrecaoFosforo } from './correcaofosforo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fosforo',
  templateUrl: './fosforo.component.html',
  styleUrls: ['./fosforo.component.css']
})
export class FosforoComponent implements OnInit {

  FonteFosforo = EFonteFosforo;
  fosforo: Fosforo;
  resultadoCorrecaoFosforo: ResultadoCorrecaoFosforo;

  constructor(private correcaoFosforoService: CorrecaoFosforoService, private http: HttpClient ) {
    this.fosforo = new Fosforo();
    this.resultadoCorrecaoFosforo = {qtdAplicar: 0, custoHa: 0};
   }

  ngOnInit(): void {
  }

  CalculaResultado():void {
    const correcaoDados = new CorrecaoFosforo(
      9,
      EFonteFosforo.SUPERFOSFATO_SIMPLES,
      this.fosforo.custoHectar(),
      70
    );
    // this.resultadoCorrecaoFosforo = this.correcaoFosforoService.getCorrecaoFosforo(correcaoDados);
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.http
      .post<ResultadoCorrecaoFosforo>(
        'http://localhost:8080/correcaofosforo',
        correcaoDados,
        { headers: headers }
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.resultadoCorrecaoFosforo = data;
        },
        error: (error) => {
          console.log(error)
        }});
  }

  TestaService(): void {
    this.http.get<String>('http://localhost:8080').subscribe({
      next: (data) => {
        alert("Servidor Respondeu: " + data);
      },
      error: (error) => {
        alert("Servidor respondeu com erro: " + error.message);
      }
    })
  }

}
