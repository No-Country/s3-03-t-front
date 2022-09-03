import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/online/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  form: any;

  userId = localStorage.getItem('userId');

  selectedFile: any;

  user: any;

  ngOnInit(): void {

    this.userService.getUser(this.userId)
      .subscribe((res) => {
        console.log(res);
        this.user = res;
        this.form.get('firstName').setValue(this.user.firstName);
        this.form.get('lastName').setValue(this.user.lastName);
        this.form.get('email').setValue(this.user.email);
        this.form.get('dni').setValue(this.user.dni);
        this.form.get('telephone').setValue(this.user.telephone);
      });

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dni: ['', Validators.required],
      telephone: ['', Validators.required],
      image: ['', Validators.required]
    });
    
  }

  processFile(imageInput: any) {
    this.selectedFile = imageInput.files[0];
  }

  send(user: any, selectedFile: any) {
    this.userService.editUser(user, selectedFile)
      .subscribe((res) => {
        console.log(res);
      })
  }

}
