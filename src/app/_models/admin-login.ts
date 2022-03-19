import { LoginUtente } from "./login-utente";


export class AdminLogin implements LoginUtente{
    email: string = 'admin';
    password: string = '111111';
}
