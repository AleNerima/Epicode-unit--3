import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { PreferitiComponent } from './Components/preferiti/preferiti.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'preferiti',component:PreferitiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
