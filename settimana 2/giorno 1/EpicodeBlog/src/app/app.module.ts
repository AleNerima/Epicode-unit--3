import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ActivePostsComponent } from './Components/active-posts/active-posts.component';
import { InactivePostsComponent } from './Components/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    NavbarComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
