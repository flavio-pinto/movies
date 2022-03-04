import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieData } from '../pages/dashboard.service';

@Component({
  selector: 'app-movie-card',
  template: `
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img [src]="'http://image.tmdb.org/t/p/original' + movie.movie.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
          <button [ngClass]="{
              'text-danger': movie.favId,
              'text-dark': !movie.favId
            }"
          class="card mb-4"
          type="button" class="btn">
            <i class="bi bi-heart-fill"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: MovieData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie);

  }

}
