import { Component, OnInit } from '@angular/core';
import { GeneralData } from './general-data';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.css']
})
export class GeneralDataComponent implements OnInit {

  dadosGerais: GeneralData;

  constructor() {
    this.dadosGerais = new GeneralData();
   }

  ngOnInit(): void {
  }

}
