import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterModule } from './register/register.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    NavbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
