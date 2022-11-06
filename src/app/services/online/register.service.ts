import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterInterface } from 'src/app/interfaces/register-interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  data: any;

  register(form: FormGroup):Observable<any>{
    return this.http.post(
        //base url + '/auth/register'
        'https://ancient-fjord-73536.herokuapp.com/' + 'https://yourroom.herokuapp.com/auth/register',

        //pendiente aplicar interface ya creada
        {
          "firstName": form.value.firstName,
          "lastName": form.value.lastName,
          "dni": form.value.dni,
          "email": form.value.email,
          "password": form.value.password,
          "telephone": '+54 9'
        }
      )
  }

  saveData(data: any): void{
    this.data = data
    localStorage.setItem('email', data.email);
  }

}
