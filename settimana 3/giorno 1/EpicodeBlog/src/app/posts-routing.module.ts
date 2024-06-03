import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SinglePostComponent } from './single-post/single-post.component';


const routes: Routes = [
  { path: 'active', component: ActivePostsComponent },
  { path: 'inactive', component: InactivePostsComponent},
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'post-detail/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
