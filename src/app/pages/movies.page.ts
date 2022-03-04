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
            <button (click)="movie.favId ? remFavorite(movie.favId, i, $event) : addFavorite(movie.movie.id, i, $event)"
            [ngClass]="{
              'text-danger': movie.favId,
              'text-dark': !movie.favId
            }" class="card mb-4" type="button" class="btn">
              <i class="bi bi-heart-fill disable-click"></i>
            </button>
          </app-movie-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .disable-click {
      pointer-events: none;
      cursor: default;
    }
  `]
})
export class MoviesPage implements OnInit {
  movies!: MovieData[];
  isLoading: boolean = false;

  constructor(private dbSrv: DashboardService) { }


  async ngOnInit() {
    this.movies = await this.dbSrv.fetchMovies();
  }

  async addFavorite(movieId: number, index: number, event: any) {
    (event.target as HTMLButtonElement).disabled = true;

    try {
      const newFav = await (await this.dbSrv.addFav(movieId)).toPromise();
      this.movies[index] = {...this.movies[index], favId: newFav.id};
      (event.target as HTMLButtonElement).disabled = false;
    } catch (error) {

      alert(error);
    }
  }

  async remFavorite(favId: number, index: number, event: any) {
    (event.target as HTMLButtonElement).disabled = true;
    try {
      await this.dbSrv.remFav(favId).toPromise();
      this.movies[index].favId = undefined;
      (event.target as HTMLButtonElement).disabled = false;
    } catch(error) {
      alert(error)
    }
  }
}
