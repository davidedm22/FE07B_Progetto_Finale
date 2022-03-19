import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglifatturaPage } from './components/dettagli-fattura.page';
import { DettagliclientePage } from './components/dettaglicliente.page';
import { FatturePage } from './components/fatture.page';
import { HomepagePage } from './components/homepage.page';
import { InfoClientiPage } from './components/info-clienti.page';
import { LoginPagePage } from './components/login-page.page';
import { SignUpPage } from './components/sign-up.page';
import { UsersPage } from './components/users.page';
import { CreaClientePage } from './components/crea-cliente.page';
import { ModificaClientePage } from './components/modifica-cliente.page';
import { AuthGuardGuard } from './_guard/auth-guard.guard';

const routes: Routes = [
  {
    path:"",
    component:LoginPagePage
  },
  {
    path:"login",
    component:LoginPagePage
  },
  {
    path:"fatture",
    component:FatturePage,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"signup",
    component:SignUpPage
  },
  {
    path:"clienti",
    component:InfoClientiPage,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"users",
    component:UsersPage
  },
  {
    path:"dettaglifattura/:id",
    component:DettaglifatturaPage,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"dettaglicliente/:id",
    component:DettagliclientePage,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"creacliente",
    component:CreaClientePage,
    canActivate: [AuthGuardGuard]

  },
  {
    path:"modificacliente/:id",
    component:ModificaClientePage,
    canActivate: [AuthGuardGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
