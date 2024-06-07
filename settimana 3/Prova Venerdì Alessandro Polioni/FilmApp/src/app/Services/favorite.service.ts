import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoritesKey = 'favorites';
  private favorites: number[] = [];

  constructor() {
    // Carica i preferiti salvati in localStorage all'avvio del servizio
    this.loadFavorites();
  }

  addToFavorites(movieId: number): void {
    if (!this.isFavorite(movieId)) {
      this.favorites.push(movieId);
      this.saveFavorites();
    }
  }

  removeFromFavorites(movieId: number): void {
    const index = this.favorites.indexOf(movieId);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.includes(movieId);
  }

  getFavorites(): number[] {
    return this.favorites;
  }

  private saveFavorites(): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(this.favorites));
    console.log('Favorites saved:', this.favorites);
  }

  private loadFavorites(): void {
    const favoritesJson = localStorage.getItem(this.favoritesKey);
    if (favoritesJson) {
      this.favorites = JSON.parse(favoritesJson);
    }
  }
}
