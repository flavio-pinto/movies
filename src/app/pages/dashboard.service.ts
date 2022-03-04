import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthData, AuthService } from '../auth/auth.service';
import { Movie } from '../models/movie';
import { Favorite } from '../models/favorite';
import { take } from 'rxjs/operators';

export interface MovieData {
  movie: Movie,
  favId?: number
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient, private authSrv: AuthService) { }

  async fetchMovies(): Promise<MovieData[]> {
    //return this.http.get<Movie[]>(`${environment.apiBaseUrl}/movies-popular`)
    const user = (await this.authSrv.user$.pipe(take(1)).toPromise()) as AuthData;
    const movies = await this.http.get<Movie[]>(`${environment.apiBaseUrl}/movies-popular`).toPromise();
    const fav = await this.http.get<Favorite[]>(`${environment.apiBaseUrl}/favorites?userId=${user.user.id}`).toPromise();

    return movies.map((el) => ({
      movie: el,
      favId: fav.find((fav) => fav.movieId == el.id)?.id
    }));
  }

  async addFav(movieId: number) {
    const user = (await this.authSrv.user$.pipe(take(1)).toPromise()) as AuthData;
    return this.http.post<Favorite>(`${environment.apiBaseUrl}/favorites`, {
      userId: user.user.id,
      movieId
    })
  }

  remFav(userId: number) {
    return this.http.delete(`${environment.apiBaseUrl}/favorites/${userId}`)
  }
}
