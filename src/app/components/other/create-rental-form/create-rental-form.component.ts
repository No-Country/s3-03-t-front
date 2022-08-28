import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateRentalService } from 'src/app/services/online/create-rental.service';

@Component({
  selector: 'app-create-rental-form',
  templateUrl: './create-rental-form.component.html',
  styleUrls: ['./create-rental-form.component.scss']
})
export class CreateRentalFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private createRental: CreateRentalService,
    private router: Router
  ) { }

  form!: FormGroup;

  id!: number;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ambientes: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      precio: ['', Validators.required],
      metrosCuadrados: ['', Validators.required]
    })
  }

  send(): void {

    console.log('send pressed');

    try {
      this.createRental.createRental(this.form.value)
        .subscribe((res: any) => {
          console.log(res);
          this.id = res.id;
          this.router.navigate([`/rental/${this.id}`])
        }, (err) => console.log(err))
    } catch (error) {
        console.log(error);
      }

  }

}
