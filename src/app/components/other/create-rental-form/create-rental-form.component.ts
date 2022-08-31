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

  selectedFile!: any;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      precio: ['', Validators.required],
      ambientes: ['', Validators.required],
      metrosCuadrados: ['', Validators.required],
      bano: ['', Validators.required],
      mobiliario: ['', Validators.required],
      mascotas: ['', Validators.required],
      fumador: ['', Validators.required],
      location: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  processFile(imageInput: any){
    this.selectedFile = imageInput.files[0];
    console.log(this.selectedFile);
  }

  send(): void {

    console.log('send pressed');

    try {
      this.createRental.createRental(this.form.value, this.selectedFile)
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
