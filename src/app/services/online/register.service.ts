import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterInterface } from 'src/app/interfaces/register-interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  data: any;

  register(form: FormGroup) {

    if (form.invalid) {
      alert("Complete todos los campos correctamente")
    } else {
      this.http.post(
        //base url + '/auth/register'
        'https://yourroom.herokuapp.com/auth/register',

        //pendiente aplicar interface ya creada
        {
          "firstName": form.value.firstName,
          "lastName": form.value.lastName,
          "dni": form.value.dni,
          "email": form.value.email,
          "password": form.value.password,
          "telephone": '+54 9'
        }
      ).subscribe((res) => {
        this.data = res;
        localStorage.setItem('email', this.data.email);
        this.router.navigate(['/login']);
      }, (err) => alert(err.message));
    }
  }
}
