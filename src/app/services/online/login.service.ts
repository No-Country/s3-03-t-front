import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginInterface } from 'src/app/interfaces/login-interface';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  signin(form: FormGroup, user: LoginInterface) {
    user = form.value;
    if (form.invalid) {
      console.log('error')
    } else {
      console.log(user);
    }
  }
}
