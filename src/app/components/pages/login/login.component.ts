import { Component, OnInit } from '@angular/core';
import { LoginInterface } from 'src/app/interfaces/login-interface';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/online/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // form!: FormGroup;
  // user!: LoginInterface;

  // constructor(private loginService: LoginService, private formBuilder: FormBuilder) { };

  ngOnInit(): void {
  //   this.form = this.formBuilder.group({
  //     email: ['', Validators.email],
  //     password: ['', Validators.required]
  //   });
  };

  //post request a la api del backend
  // send(): void {
  //   this.loginService.signin(this.form, this.user);
  // };

}
