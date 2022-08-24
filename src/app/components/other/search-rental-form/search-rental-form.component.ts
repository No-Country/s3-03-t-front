import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-rental-form',
  templateUrl: './search-rental-form.component.html',
  styleUrls: ['./search-rental-form.component.scss']
})
export class SearchRentalFormComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  form!: FormGroup;
  
  ngOnInit(): void {
  }

  send():void {

  }
}
