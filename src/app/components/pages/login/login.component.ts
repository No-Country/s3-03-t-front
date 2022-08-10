import { Component, OnInit } from '@angular/core';
import { LoginInterface } from 'src/app/interfaces/login-interface';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup;
  user!: LoginInterface;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  };

  send(): any {
    this.user = this.form.value;
    console.log(this.user);
  }

}
