import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template:  `
  <h3>AUTH</h3>
  <nav>
    <a routerLink="./" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
    <a routerLink="./act" routerLinkActive="active">Manage ACT</a>
    <a routerLink="./connect" routerLinkActive="active">Manage CONNECT</a>
    <a routerLink="./volunteer" routerLinkActive="active">Manage VOLUNTEER</a>
    <a routerLink="/auth" routerLinkActive="active">Auth</a>

  </nav>
  <router-outlet></router-outlet>
  <router-outlet name="popup"></router-outlet>
  `
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
