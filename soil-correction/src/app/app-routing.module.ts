import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalcioMagnesioComponent } from './calcio-magnesio/calcio-magnesio.component';
import { FosforoComponent } from './fosforo/fosforo.component';
import { PotassioComponent } from './potassio/potassio.component';

const routes: Routes = [
  {path: '', component: FosforoComponent},
  {path: 'fosforo', component: FosforoComponent},
  {path: 'potassio', component: PotassioComponent},
  {path: 'calciomagnesio', component: CalcioMagnesioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
