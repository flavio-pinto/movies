import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Movie } from '../models/movie';
import { MovieData } from './dashboard.service';

@Component({
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col-3" *ngFor="let movie of movies; let i = index">
          <app-movie-card [movie]="movie"></app-movie-card>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class MoviesPage implements OnInit {
  movies!: MovieData[];

  constructor(private dbSrv: DashboardService) { }

  /* ngOnInit(): void {
    this.dbSrv.fetchMovies().subscribe((ris) => {
      console.log(ris);
      this.movies = ris;
    })
  } */
  async ngOnInit() {
    this.movies = await this.dbSrv.fetchMovies();
    console.log(this.movies);

  }

}
