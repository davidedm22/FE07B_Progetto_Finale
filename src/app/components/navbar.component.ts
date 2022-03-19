import { Component, OnInit } from '@angular/core';
import { AuthGuardGuard } from '../_guard/auth-guard.guard';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container-fluid">

        <a class="navbar-brand">Di Mauro S.R.L</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a
              class="nav-link"
              [routerLink]="['login']"
              routerLinkActive="router-link-active"
              [hidden]="this.authSrv.loggedIn()"
              >Login</a
            >
            <a
              class="nav-link"
              [routerLink]="['signup']"
              routerLinkActive="router-link-active"
              >Sign Up</a
            >
            <a
              class="nav-link"
              [routerLink]="['fatture']"
              routerLinkActive="router-link-active"
              >Fatture</a
            >
            <a
              class="nav-link"
              [routerLink]="['clienti']"
              routerLinkActive="router-link-active"
              >Clienti</a
            >
            <a
              class="nav-link"
              [routerLink]="['users']"
              routerLinkActive="router-link-active"
              >Users</a
            >
            <a
              class="nav-link btn btn-danger "
              (click)="onlogOut()"
              [hidden]="!this.authSrv.loggedIn()"
              >Logout
</a
            >
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar-nav {
        flex: 1;
        margin: auto !important;
        display: flex;
        justify-content: space-evenly;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthGuardGuard, public authSrv: AuthService) {}
  ngOnInit(): void {}

  onlogOut() {
    if (this.authSrv.loggedIn()) {
      this.authSrv.logOut();
    } else {
      alert('Non hai ancora effettuato il login!');
    }
  }
}
