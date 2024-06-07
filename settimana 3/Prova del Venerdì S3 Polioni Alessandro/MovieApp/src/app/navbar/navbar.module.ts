import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { LoginRoutingModule } from '../login/login-routing.module';
import { RegisterRoutingModule } from '../register/register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
