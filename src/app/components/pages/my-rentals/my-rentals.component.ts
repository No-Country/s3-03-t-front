import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchRentalService } from 'src/app/services/online/search-rental.service';

@Component({
  selector: 'app-my-rentals',
  templateUrl: './my-rentals.component.html',
  styleUrls: ['./my-rentals.component.scss']
})
export class MyRentalsComponent implements OnInit {

  constructor(
    private searchRentalService: SearchRentalService,
    private http: HttpClient
  ) { }

  rentals: any = [];

  listaImg: any = [];

  userId: any = localStorage.getItem('userId');

  ngOnInit(): void {

    this.http.get(
      `https://yourroom.herokuapp.com/user/${this.userId}`
    ).subscribe((res:any) => {
      this.rentals = res.propertyResponseList;

      for (let i = 0; i < this.rentals.length; i++) {
        if (this.rentals[i].imgList.length !== 0) {
          this.listaImg[i] = this.rentals[i].imgList[0].fileUrl;
        }
      }
      
    })

  }

}
