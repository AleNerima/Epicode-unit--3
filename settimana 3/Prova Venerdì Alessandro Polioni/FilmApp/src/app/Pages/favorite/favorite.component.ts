import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../Services/favorite.service';
import { MovieService } from '../../Services/movie.service';
import { iMovie } from '../../Models/i-movie';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteMovies: iMovie[] = [];

  constructor(private favoriteService: FavoriteService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadFavoriteMovies();
  }

  loadFavoriteMovies(): void {
    const favoriteIds = this.favoriteService.getFavorites();
    this.movieService.getMovies().subscribe(data => {
      this.favoriteMovies = data.filter(movie => favoriteIds.includes(movie.id));
    });
  }

  removeFromFavorites(movie: iMovie): void {
    const movieId = movie.id;
    this.favoriteService.removeFromFavorites(movieId);

    this.loadFavoriteMovies();
  }
}
