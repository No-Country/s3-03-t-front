import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/interfaces/login-interface';

// import { Observable, throwError } from "rxjs";
// import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  data: any;

  signin(form: FormGroup, user: LoginInterface) {

    user = form.value;

    if (form.invalid) {
      alert('Error: campos incorrectos')
    } else {
        this.http.post(
          //pendiente crear variable global
          'https://yourroom.herokuapp.com/auth/login',
          {
            "email": user.email,
            "password": user.password
          }
        ).subscribe((res) => {
          this.data = res;
          //pendiente crear service que haga esto por otro lado
          localStorage.setItem('token', this.data.token);
          localStorage.setItem('role', this.data.role);
          localStorage.setItem('firstName', this.data.firstName);
          localStorage.setItem('lastName', this.data.lastName);

          //redirect
          this.router.navigate(['/select-role']);
        }, (err) => alert(err.message))
    }
  }
}
