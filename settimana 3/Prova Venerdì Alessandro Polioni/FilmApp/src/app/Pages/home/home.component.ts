import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { FavoriteService } from '../../Services/favorite.service';
import { iMovie } from '../../Models/i-movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: iMovie[] = [];

  constructor(private movieService: MovieService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      this.updateFavoritesState();
    });
  }

  updateFavoritesState(): void {
    const favorites = this.favoriteService.getFavorites();
    this.movies.forEach(movie => {
      movie.isFavorite = favorites.includes(movie.id);
    });
  }

  addToFavorites(movie: iMovie): void {
    this.favoriteService.addToFavorites(movie.id);
    movie.isFavorite = true;
  }

  removeFromFavorites(movie: iMovie): void {
    this.favoriteService.removeFromFavorites(movie.id);
    movie.isFavorite = false;
  }
}
