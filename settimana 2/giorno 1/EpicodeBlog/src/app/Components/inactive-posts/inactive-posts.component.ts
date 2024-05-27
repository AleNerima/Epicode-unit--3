import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/iPosts';
import { PostService } from '../../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  inactivePosts: iPost[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
    try {
      this.inactivePosts = await this.postService.getPosts(false);
      console.log('Post inattivi:', this.inactivePosts); // Aggiungi questo console.log
    } catch (error) {
      console.error('Errore recupero posts inattivi:', error);
    }
  }
}
