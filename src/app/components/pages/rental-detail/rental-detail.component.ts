import { Component, OnInit } from '@angular/core';
import { SearchRentalService } from 'src/app/services/online/search-rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  constructor(
    private searchRentalService: SearchRentalService
  ) { }

  id: number = 6;

  ngOnInit(): void {

    this.searchRentalService.getRental(this.id)
      .subscribe((res) => {
        console.log(res)
      });

  }

}
