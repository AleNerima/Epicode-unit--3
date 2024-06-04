import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SinglePostComponent } from './single-post/single-post.component'; // Importa SinglePostComponent

@NgModule({
  declarations: [
    HomepageComponent,
    SinglePostComponent // Dichiarazione di SinglePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

  ]
})
export class HomeModule { }

