import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterInterface } from 'src/app/interfaces/register-interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  data: any;

  register(data:RegisterInterface) {

      this.http.post(
        //base url + '/auth/register'
        'https://yourroom.herokuapp.com/auth/register',

        //pendiente aplicar interface ya creada
        {
          "firstName": data.firstName,
          "lastName": data.lastName,
          "dni": data.dni,
          "email": data.email,
          "password": data.password,
          "telephone": '+54 9'
        }
      ).subscribe((res) => {
        this.data = res;
        localStorage.setItem('email', this.data.email);
        this.router.navigate(['/login']);
      }, (err) => alert(err.message));
    }
}
