import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FullNamePipe } from './pipes/full-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    FullNamePipe,
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
