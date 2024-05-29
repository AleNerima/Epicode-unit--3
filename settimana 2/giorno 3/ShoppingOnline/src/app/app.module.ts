import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './Components/lista-prodotti/lista-prodotti.component';
import { PreferitiComponent } from './Components/preferiti/preferiti.component';

import { HttpClientModule } from '@angular/common/http';
import { CarrelloComponent } from './Components/carrello/carrello.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    PreferitiComponent,
    CarrelloComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
