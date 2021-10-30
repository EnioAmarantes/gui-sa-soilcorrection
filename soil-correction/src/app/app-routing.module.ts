import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CTCComponent } from './ctc/ctc.component';

const routes: Routes = [
  {path: '', component: CTCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
