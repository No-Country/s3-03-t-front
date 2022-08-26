import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchRentalService } from 'src/app/services/online/search-rental.service';

@Component({
  selector: 'app-search-rental-form',
  templateUrl: './search-rental-form.component.html',
  styleUrls: ['./search-rental-form.component.scss']
})
export class SearchRentalFormComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder,
    private searchRentalService: SearchRentalService,
    private router: Router
  ) {
    this.buildForm();
  }

  form!: FormGroup;
  
  ngOnInit(): void {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      ubicacion: ['', Validators.required]
    })
  }

  send():void {
    this.searchRentalService.getAllRentals()
      .subscribe((res) => console.log(res),
      (err) => {
        console.log(err);
        if (err.status = 401) {
          this.router.navigate(['/login']);
        }
      }
      )
  }
}
