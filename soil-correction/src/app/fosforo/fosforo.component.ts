import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fosforo',
  templateUrl: './fosforo.component.html',
  styleUrls: ['./fosforo.component.css']
})
export class FosforoComponent implements OnInit {

  kgha = 0.0;
  qtdAplicar = 0.0;
  custoHa = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

}
