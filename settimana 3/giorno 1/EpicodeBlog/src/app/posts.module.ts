import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,

  ]
})
export class PostsModule { }
