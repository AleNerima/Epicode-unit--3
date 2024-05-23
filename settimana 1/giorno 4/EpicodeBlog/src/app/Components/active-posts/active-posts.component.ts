import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/iPosts';
import { PostService } from '../../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
  activePosts: iPost[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
    try {
      this.activePosts = await this.postService.getPosts(true);
      console.log('Post attivi:', this.activePosts);
    } catch (error) {
      console.error('Errore recupero posts attivi:', error);
    }
  }

}
