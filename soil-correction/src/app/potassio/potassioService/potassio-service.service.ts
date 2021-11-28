import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CorrecaoPotassio } from './correcaopotassio';
import { ResultadoCorrecaoPotassio } from './resultadocorrecaopotassio';

@Injectable({
  providedIn: 'root'
})
export class PotassioServiceService {

  httpHeaders: HttpHeaders;
  restultadoPotassio: ResultadoCorrecaoPotassio;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    this.httpHeaders.append('Access-Control-Allow-Origin', '*');
    this.httpHeaders.append('Content-Type', 'application/json; charset=UTF-8');

    this.restultadoPotassio = {
      qtdAplicar: 0,
      custoHa: 0
    }
   }

   getCorrecaoPotassio(correcaoPotassio: CorrecaoPotassio): ResultadoCorrecaoPotassio{
    this.http.post<ResultadoCorrecaoPotassio>('http://localhost:8080/correcaopotassio',
    correcaoPotassio,
    {headers: this.httpHeaders})
    .subscribe({
      next: (data) => {
        this.restultadoPotassio = data;
      },
      error: (error) => {
        alert(error);
      }
    });

    return this.restultadoPotassio;
  }
}
