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
    private router: Router,
    private searchRentalService: SearchRentalService
  ) {}
  
  rentals: any = [];
  listaImg: any = [];

  ngOnInit(): void {

    this.searchRentalService.getAllRentals()
      .subscribe((res) => {
        this.rentals = res;
        console.log(this.rentals);
        

        for (let i = 0; i < this.rentals.length; i++) {
          if (this.rentals[i].imgList.length !== 0) {
            this.listaImg[i] = this.rentals[i].imgList[0].fileUrl;
          }
        }
    })

  }

}
