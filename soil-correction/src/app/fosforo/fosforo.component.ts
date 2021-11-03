import { Component, OnInit } from '@angular/core';
import { FontesFosforo } from '../fontes/fonte-fosforo';

@Component({
  selector: 'app-fosforo',
  templateUrl: './fosforo.component.html',
  styleUrls: ['./fosforo.component.css']
})
export class FosforoComponent implements OnInit {

  FontesFosforo = FontesFosforo;
  kgha = 0.0;
  qtdAplicar = 0.0;
  custoHa = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

}
