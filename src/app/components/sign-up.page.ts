import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpService } from '../_services/sign-up.service';
import { Router } from '@angular/router';


@Component({
  template: `
  <body>
  <div id="loginQuad" class="container text-center bg-dark text-white">
      <h2>Di Mauro-CRM</h2>
      <div class="row justify-content-center">
        <div class="col-6">
          <form #form="ngForm" (ngSubmit)="onsignup(form)">
            <div class="form-group">
              <label for="username">Username</label>
              <input
              placeholder="Username personale"
                ngModel
                name="username"
                class="form-control"
                type="username"
                id="username"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
              placeholder="mario@rossi.com"
                ngModel
                name="email"
                class="form-control"
                type="email"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
              placeholder="Minimo 6 caratteri!"
                ngModel
                name="password"
                class="form-control"
                type="password"
                id="password"
              />
            </div>
            <div class="container">
              <h3 class="mt-2">Seleziona il tuo ruolo:</h3>
              <select
                ngModel
                name="ruolo"
                class="form-select my-3"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="ROLE_USER">Utente</option>
                <option value="ROLE_ADMIN">Amministratore</option>
              </select>
            </div>
            <button
              class="btn btn-secondary m-3"
              [disabled]="false"
              type="submit"
            >
              Registrati!
              <span></span>
            </button>

          </form>
        </div>
      </div>
    </div>
    </body>
  `,
  styles: [`
  ::placeholder{
    color:blue;
    font-size:1.2rem
  }
  .container{
    /* margin-top:60px; */
    border-radius:20px;
    padding-top:50px
  }
  .btn{
    border: none;
 display: inline-block;
 position: relative;
 padding: 0.7em 2.4em;
 font-size: 18px;
 background-color:transparent;
 cursor: pointer;
 user-select: none;
 overflow: hidden;
 color: royalblue;
 z-index: 1;
 font-family: inherit;
 font-weight: 500;
}
.btn span{
  position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background: transparent;
 z-index: -1;
 border: 4px solid royalblue;
}
.btn span::before{
  content: "";
 display: block;
 position: absolute;
 width: 8%;
 height: 500%;
 background: var(--lightgray);
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(-60deg);
 transition: all 0.3s;
}
.btn:hover span::before{
  transform: translate(-50%, -50%) rotate(-90deg);
 width: 100%;
 background: royalblue;
}
.btn:hover{
  color: white;
}
.btn:active span::before{
  background: #2751cd;
}
body{
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg) center center no-repeat scroll;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
`],
})
export class SignUpPage implements OnInit {
  constructor(private signSrv:SignUpService,private router:Router) {}

  ngOnInit(): void {}

  onsignup(form:NgForm) {
    this.signSrv.signup(form.value).subscribe(res=>{
      alert('Registrazione avvenuta!')
      this.router.navigate(['/login']);
    });

  }
}
