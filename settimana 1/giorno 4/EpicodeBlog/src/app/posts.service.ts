import { Injectable } from '@angular/core';
import { iPost } from '../app/Models/iPosts'; //

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = '../assets/db.json';

  constructor() { }

  async getPosts(): Promise<iPost[]> {
    try {
      const response = await fetch(this.postsUrl);
      const posts = await response.json();
      return posts.posts || [];
    } catch (error) {
      console.error('Errore durante il recupero dei post:', error);
      return []; // In caso di errore, restituisce array vuoto
    }
  }
}
