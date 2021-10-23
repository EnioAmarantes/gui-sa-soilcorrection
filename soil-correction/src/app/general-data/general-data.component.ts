import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.css']
})
export class GeneralDataComponent implements OnInit {

  argiloso: string = " + 40% de argila";
  cultiveSystem: string = "Plantio Direto";

  constructor() { }

  ngOnInit(): void {
  }

}
