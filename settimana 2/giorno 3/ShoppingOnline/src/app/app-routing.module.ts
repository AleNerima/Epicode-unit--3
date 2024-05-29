import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdottiComponent } from './Components/lista-prodotti/lista-prodotti.component';
import { PreferitiComponent } from './Components/preferiti/preferiti.component';
import { CarrelloComponent } from './Components/carrello/carrello.component';

const routes: Routes = [
  {path:'', component:ListaProdottiComponent},
  {path:'preferiti', component:PreferitiComponent},
  {path:'carrello', component:CarrelloComponent},
  {path:'**', component:Error}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
