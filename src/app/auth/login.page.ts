import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  template: `
    <div class="row justify-content-center mt-5 w-25 text-center border p-3 mx-auto">
      <div class="col-6">
      <div *ngIf="errorMessage" class="alert alert-danger" role="alert">
          {{errorMessage}}
        </div>
        <form #form="ngForm" (ngSubmit)="onSubmit(form)" >
          <div class="form-group">
            <label for="email">Email</label>
            <input ngModel name="email" class="form-control" type="email" id="email" />
          </div>
          <div class="form-group">
            <label for="pass">Password</label>
            <input ngModel name="password" class="form-control" type="password" id="pass" />
          </div>
          <button  class="btn btn-primary mt-3" [disabled]="isLoading" type="submit">Accedi
          <span
              *ngIf="isLoading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
        </form>
        <span>o <a class="text-decoration-underline" (click)="goRegister()">Registrati</a></span>
      </div>
    </div>
  `,
  styles: [],
})
export class LoginPage implements OnInit {
  isLoading = false
  errorMessage = undefined
  constructor(private authSrv:AuthService,private router:Router) {}

  ngOnInit(): void {


  }

  async onSubmit(form:any){
    try {
      await this.authSrv.login(form.value).toPromise()
      form.reset()
      this.errorMessage=undefined
      this.router.navigate(['/movies'])
    } catch (error:any) {
      this.errorMessage = error
      console.error(error)
    }
  }

  goRegister() {
    this.router.navigate(['/signup']);
  }
}
