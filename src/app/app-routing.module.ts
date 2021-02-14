import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { PacientsComponent } from "./pacients/pacients.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pacients/:id', component: PacientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, PacientsComponent]
