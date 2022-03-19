import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';



@Component({
  template: `
  <body>
    <div id="loginQuad" class="container text-center bg-dark text-white">
      <h2>Di Mauro </h2>
      <div class="row justify-content-center">
        <div class="col-6">
          <form #form="ngForm" (ngSubmit)="onlogin(form)">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                ngModel
                name="username"
                class="form-control"
                type="text"
                id="username"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <label for="pass">Password</label>
              <input
                ngModel
                name="password"
                class="form-control"
                type="password"
                id="password"
                placeholder="Minimo 6 caratteri"
              />
            </div>
            <button
              class="btn btn-secondary m-3"
              [disabled]="false"
              type="submit"
            >
              Entra
              <span></span>
            </button>
          </form>
          <!--button logOut-->
        </div>
      </div>
 </div>
</body>



  `,
  styles: [`
  .btn{
    border: none;
 display: block;
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
.container{
  opacity: .95;
        width: 40em;
        margin-top:  !important;
        border-radius: 2%;
        padding: 30px;


}
::placeholder{
  color: blue;
  font-size: 1.2em
}
body{
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg) center center no-repeat scroll;
  background-size: cover;
  width: 100%;
  height: 100vh;
}


  `],
})
export class LoginPagePage implements OnInit {
  form!: NgForm;
  constructor(private authSrv:AuthService) {}

  ngOnInit(): void {}

  onlogin(form: any) {
    this.authSrv.login(form.value);
  }
}

