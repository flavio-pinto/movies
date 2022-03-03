import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './components/navbar.component';
import { MoviesPage } from './pages/movies.page';
import { UserPage } from './pages/user.page';
import { MovieCardComponent } from './components/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesPage,
    UserPage,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
