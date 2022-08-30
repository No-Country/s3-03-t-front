import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchRentalService } from 'src/app/services/online/search-rental.service';

@Component({
  selector: 'app-rental-catalog',
  templateUrl: './rental-catalog.component.html',
  styleUrls: ['./rental-catalog.component.scss']
})
export class RentalCatalogComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    
  }
  rentals = this.router.getCurrentNavigation()!.extras.state!.data;

  ngOnInit(): void {
  }

}
