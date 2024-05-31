import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/homepage/homepage.component';
import { TaskCompletatiComponent } from './Components/task-completati/task-completati.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'task-completati', component:TaskCompletatiComponent},
  {path:'users', component:UsersComponent},
  {path:'**', component:Error}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
