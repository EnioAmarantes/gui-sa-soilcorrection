import { Component, OnInit } from '@angular/core';
import { FontesPotassio } from './fontes/fontes-potassio';
import { Potassio } from './potassio';

@Component({
  selector: 'app-potassio',
  templateUrl: './potassio.component.html',
  styleUrls: ['./potassio.component.css']
})
export class PotassioComponent implements OnInit {

  FontesPotassio = FontesPotassio;
  potassio: Potassio;

  constructor() {
    this.potassio = new Potassio();
   }

  ngOnInit(): void {
  }

}
