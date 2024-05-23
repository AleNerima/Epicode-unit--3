import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/iPosts';
import { IJason } from '../../Models/i-jason';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postsArr: iPost[] = [];
  allPosts: iPost[] = []; // Array per mantenere tutti i post caricati

  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
    const response = await fetch('../../../assets/db.json');
    const posts = <IJason>await response.json();
    this.allPosts = posts.posts;
    this.getRandomPosts(4); // Chiamo la funzione per ottenere 4 post casuali
  }

  getRandomPosts(num: number) {
    const randomPosts: iPost[] = [];
    const usedIndices: Set<number> = new Set(); // Per tenere traccia degli indici già usati

    while (randomPosts.length < num && usedIndices.size < this.allPosts.length) {
      const randomIndex = this.getRandomInt(this.allPosts.length);
      if (!usedIndices.has(randomIndex)) {
        randomPosts.push(this.allPosts[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }

    this.postsArr = randomPosts;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
