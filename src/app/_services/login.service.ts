import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginUtente } from '../_models/login-utente';
import { Users } from '../_models/user';
import { AdminLogin } from '../_models/admin-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myApiUrl:string = environment.pathApi

  constructor(private http:HttpClient) { }

  login(data:LoginUtente){
    try{
      console.log("Accesso  effettuato");
      return this.http.post<Users>(this.myApiUrl + '/api/auth/login', data);
    }catch(error){
      return alert('errore')
    }
  }
}
