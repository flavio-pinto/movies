import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';
import { SignupPage } from './signup.page';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginPage,
    SignupPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path:'login',
        component:LoginPage
      },
      {
        path:'signup',
        component:SignupPage
      }
    ])
  ],
  providers:[]
})
export class AuthModule { }
