import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Movie } from '../models/movie';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let movie of movies; let i = index">
        <app-movie-card [movie]="movie"></app-movie-card>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class MoviesPage implements OnInit {
  movies!: Movie[];

  constructor(private dbSrv: DashboardService) { }

  ngOnInit(): void {
    this.dbSrv.fetchMovies().subscribe((ris) => {
      console.log(ris);
      this.movies = ris;
    })
  }

}
