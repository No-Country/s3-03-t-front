import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInterface } from 'src/app/interfaces/login-interface';

// import { Observable, throwError } from "rxjs";
// import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient,
    ) { }

  user!: LoginInterface;

  signin(user: LoginInterface):Observable<any>{
    return this.http.post(
          //pendiente crear variable global
          'https://yourroom.herokuapp.com/auth/login',
          {
            "email": user.email,
            "password": user.password
          }
        )
    }

  saveUser(user: any){
    this.user = user;
    localStorage.setItem('userId', user.id)
    localStorage.setItem('token', user.token);
    localStorage.setItem('role', user.role);
    localStorage.setItem('firstName', user.firstName);
    localStorage.setItem('lastName', user.lastName);
  }
}
