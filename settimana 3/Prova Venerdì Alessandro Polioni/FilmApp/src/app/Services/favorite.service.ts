
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: number[] = [];

  constructor() { }


  addToFavorites(movieId: number): void {
    if (!this.isFavorite(movieId)) {
      this.favorites.push(movieId);
    }
  }

  removeFromFavorites(movieId: number): void {
    const index = this.favorites.indexOf(movieId);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.includes(movieId);
  }

  getFavorites(): number[] {
    return this.favorites;
  }
}
