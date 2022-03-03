import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-card',
  template: `
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img [src]="'http://image.tmdb.org/t/p/original' + movie.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
