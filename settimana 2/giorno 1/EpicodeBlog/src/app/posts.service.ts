import { Injectable } from '@angular/core';
import { iPost } from '../app/Models/iPosts'; //

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = '../assets/db.json';

  constructor() { }

  async getPosts(active?:boolean): Promise<iPost[]> {
    try {
      const response = await fetch(this.postsUrl);
      const posts = await response.json();

      if(active !== undefined) {return posts.posts.filter((post: { active: boolean; })=> post.active === active)}
      else{return posts.posts || [];}

    } catch (error) {
      console.error('Errore recupero  post:', error);
      return [];
    }
  }
}
