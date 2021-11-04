import { Component, OnInit } from '@angular/core';
import { FontesFosforo } from './fontes/fontes-fosforo';
import { Fosforo } from './fosforo';

@Component({
  selector: 'app-fosforo',
  templateUrl: './fosforo.component.html',
  styleUrls: ['./fosforo.component.css']
})
export class FosforoComponent implements OnInit {

  FontesFosforo = FontesFosforo;
  fosforo: Fosforo;

  constructor() {
    this.fosforo = new Fosforo();
   }

  ngOnInit(): void {
  }

}
