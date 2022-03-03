import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './components/navbar.component';
import { MoviesPage } from './pages/movies.page';
import { UserPage } from './pages/user.page';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesPage,
    UserPage
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
