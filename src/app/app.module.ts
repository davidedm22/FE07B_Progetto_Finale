import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHttpInterceptorInterceptor } from './_interceptors/my-http.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatturePage } from './components/fatture.page';
import { HomepagePage } from './components/homepage.page';
import { InfoClientiPage } from './components/info-clienti.page';
import { LoginPagePage } from './components/login-page.page';
import { NavbarComponent } from './components/navbar.component';
import { SignUpPage } from './components/sign-up.page';
import { UsersPage } from './components/users.page';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DettaglifatturaPage } from './components/dettagli-fattura.page';
import { DettagliclientePage } from './components/dettaglicliente.page';
import { CreaClientePage } from './components/crea-cliente.page';
import { ModificaClientePage } from './components/modifica-cliente.page';
import { PaginationComponent } from './components/pagination.component';
import { AuthGuardGuard } from './_guard/auth-guard.guard';
import { AuthService } from './_services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    FatturePage,
    HomepagePage,
    InfoClientiPage,
    LoginPagePage,
    NavbarComponent,
    SignUpPage,
    UsersPage,
    DettaglifatturaPage,
    DettagliclientePage,
    CreaClientePage,
    ModificaClientePage,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyHttpInterceptorInterceptor,
      multi:true
    }, AuthGuardGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
