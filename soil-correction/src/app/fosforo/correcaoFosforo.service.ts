import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CorrecaoFosforo } from './correcaofosforo';
import { ResultadoCorrecaoFosforo } from './resultadoCorrecaoFosforo';

@Injectable({
  providedIn: 'root'
})
export class CorrecaoFosforoService {

  httpHeaders: HttpHeaders;

  resultadoCorrecaoFosforo: ResultadoCorrecaoFosforo;

  constructor(private http: HttpClient) {

    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    this.httpHeaders.append('Access-Control-Allow-Origin', '*');
    this.httpHeaders.append('Content-Type', 'application/json; charset=UTF-8');

    this.resultadoCorrecaoFosforo = {
      qtdAplicar: 0,
      custoHa: 0
    }
   }

  getCorrecaoFosforo(correcaoFosforo: CorrecaoFosforo): ResultadoCorrecaoFosforo{
    this.http.post<ResultadoCorrecaoFosforo>('http://localhost:8080/correcaofosforo',
    correcaoFosforo,
    {headers: this.httpHeaders})
    .subscribe({
      next: (data) => {
        this.resultadoCorrecaoFosforo = data;
      },
      error: (error) => {
        alert(error);
      }
    });

    return this.resultadoCorrecaoFosforo;
  }

  testaService(){
    this.http.get<String>('http://localhost:8080/').subscribe({
      next: (data) => {
        alert("Servidor Respondeu: " + data);
      },
      error: (error) => {
        alert("Servidor respondeu com erro: " + error.message);
      }
    })
  }
}
