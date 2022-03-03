import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPage } from './pages/movies.page';
import { UserPage } from './pages/user.page';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesPage
  },
  {
    path: 'user',
    component: UserPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
