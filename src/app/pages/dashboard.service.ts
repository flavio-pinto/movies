import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  fetchMovies() {
    return this.http.get<Movie[]>(`${environment.apiBaseUrl}/movies-popular`)
  }
}
