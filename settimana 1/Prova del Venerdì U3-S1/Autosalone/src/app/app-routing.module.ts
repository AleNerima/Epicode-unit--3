import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FiatComponent } from './Components/fiat/fiat.component';
import { FordComponent } from './Components/ford/ford.component';
import { AudiComponent } from './Components/audi/audi.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fiat', component: FiatComponent },
  { path: 'ford', component: FordComponent },
  { path: 'audi', component: AudiComponent },
  { path: '**', redirectTo:''} // Se la pagina non è stata trovata reindirizzo alla homepage.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
