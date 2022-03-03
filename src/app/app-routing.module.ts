import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { MoviesPage } from './pages/movies.page';
import { UserPage } from './pages/user.page';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'movies',
    component: MoviesPage
  },
  {
    canActivate: [AuthGuard],
    path: 'user',
    component: UserPage
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
