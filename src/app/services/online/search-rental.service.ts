import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchRentalService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  token:string = localStorage.getItem('token')!;

  
  headers:any = new HttpHeaders()
        .set('Authorization', this.token!);


  getAllRentals() {

    //pendiente fixear esto de otra manera
    if (!this.token) {
      this.headers = new HttpHeaders()
        .set('Authorization', 'this.token!');
        console.log('header = string')
    }

    return this.http.get(
      'https://yourroom.herokuapp.com/property',
      {
        headers: this.headers
      }
    );
  }
}