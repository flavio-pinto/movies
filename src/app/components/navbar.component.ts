import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Menu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" [routerLink]="['/movies']" routerLinkActive="active">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/user']" routerLinkActive="active">Profile</a>
            </li>
          </ul>
          <div *ngIf="isLoggedIn" class="ms-auto">
            <p class="d-inline username-welc-back">Bentornato <span class="fst-italic fw-bolder">{{welcomeUser}}</span></p>
            <button class="btn btn-danger mx-3" (click)="onLogout()">logout</button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  welcomeUser!: string | undefined;

  constructor(private authSrv: AuthService) { }

  onLogout() {
    this.authSrv.logout();
  }

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    })

    this.authSrv.user$.subscribe((data) => {
      this.welcomeUser = data?.user.name;
    })
  }

}
