import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { MovieData } from './dashboard.service';
import { AuthData } from '../auth/auth.service';

@Component({
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col-3" *ngFor="let movie of movies; let i = index">
          <app-movie-card [movie]="movie">
            <button (click)="movie.favId ? remFavorite(movie.favId, i) : addFavorite(movie.movie.id, i)" [ngClass]="{
              'text-danger': movie.favId,
              'text-dark': !movie.favId
            }" class="card mb-4" type="button" class="btn">
              <i class="bi bi-heart-fill"></i>
            </button>
          </app-movie-card>
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


  async ngOnInit() {
    this.movies = await this.dbSrv.fetchMovies();
  }

  async addFavorite(movieId: number, index: number) {
    try {
      const newFav = await (await this.dbSrv.addFav(movieId)).toPromise();
      this.movies[index] = {...this.movies[index], favId: newFav.id}
    } catch (error) {
      alert(error);
    }
  }

  async remFavorite(favId: number, index: number) {
    try {
      await this.dbSrv.remFav(favId).toPromise();
      this.movies[index].favId = undefined;
    } catch(error) {
      alert(error)
    }
  }
}
