import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../Services/movie.service'; // Assicurati di importare correttamente il servizio

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    MovieService // Aggiungi il servizio MovieService ai providers
  ]
})
export class HomeModule { }
