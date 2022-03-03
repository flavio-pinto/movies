import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Movie } from '../models/movie';

@Component({
  template: `
    <p>
      movies works!
    </p>
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
    })
  }

}
