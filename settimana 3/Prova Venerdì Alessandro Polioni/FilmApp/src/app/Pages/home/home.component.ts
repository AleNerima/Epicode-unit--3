import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { iMovie } from '../../Models/i-movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: iMovie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      console.log(data);
      this.movies = data;
    });
  }
}
