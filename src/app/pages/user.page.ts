import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="container mt-5">
      <p>Nome utente: {{userInfo.user.name}} {{userInfo.user.surname}}</p>
      <p>Email: {{userInfo.user.email}}</p>
    </div>
  `,
  styles: [
  ]
})
export class UserPage implements OnInit {
  userInfo: any;

  constructor() { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return
    }
    this.userInfo = JSON.parse(userJson);
  }
}
