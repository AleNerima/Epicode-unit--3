import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/iPosts';
import { PostService } from '../../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstPost!: iPost;
  postsArr: iPost[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
    try {
      const posts = await this.postService.getPosts();
      this.firstPost = posts[0]; // Assegna il primo post alla variabile firstPost
      this.postsArr = this.getRandomPosts(posts, 4); // Ottieni 4 post casuali
    } catch (error) {
      console.error('Errore recupero posts:', error);
    }
  }

  getRandomPosts(posts: iPost[], num: number): iPost[] {
    const shuffled = posts.slice(); // Clona l'array originale per evitare modifiche
    shuffled.sort(() => 0.5 - Math.random()); // Ordina casualmente gli elementi clonati
    return shuffled.slice(0, num);
  }
}

