import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { FosforoComponent } from './fosforo/fosforo.component';
import { PotassioComponent } from './potassio/potassio.component';
import { CalcioMagnesioComponent } from './calcio-magnesio/calcio-magnesio.component';
import { CTCComponent } from './ctc/ctc.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralDataComponent,
    FosforoComponent,
    PotassioComponent,
    CalcioMagnesioComponent,
    CTCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
