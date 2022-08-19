import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/online/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private _router: Router
    ) {
      this.buildForm();
    }

  form!: FormGroup;

  buildForm(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  send(): void{
    if (this.form.invalid) {
      alert("Complete todos los campos correctamente")
    } else {
      this.registerService.register(this.form)
      .subscribe((res) => {
        this.registerService.saveData(res);
        this._router.navigate(['/login']);
      }, (err) => alert(err.message));
    }
  }



  get passMatch(): boolean{
    return this.form.value.password.length > 0
    && this.form.value.password === this.form.value.confirmPassword
    && this.form.valid
  }

  ngOnInit(): void {
  }

}
