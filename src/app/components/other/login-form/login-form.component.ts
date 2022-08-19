import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/interfaces/login-interface';
import { LoginService } from 'src/app/services/online/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private _router: Router
    ) {
      this.buildForm();
    };

  form!: FormGroup;

  buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  };

  //post request a la api del backend
  send(): void {
    if (this.form.invalid) {
      alert('Error: campos incorrectos')
    }else{
      this.loginService.signin(this.form.value)
      .subscribe((res) => {
        this.loginService.user = res;
        this.loginService.saveUser(res);
        //redirect
        this._router.navigate(['/select-role']);
      }, (err) => {
        alert(err.message)
      });
    }
  };

}
