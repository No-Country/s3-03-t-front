import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeadersService } from '../other/http-headers.service';

@Injectable({
  providedIn: 'root'
})
export class SearchRentalService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private httpHeaders: HttpHeadersService
  ) { }

  token!: string;
  headers!: any;

  getAllRentals() {

    this.headers = this.httpHeaders.getHeaders();

    // this.token = localStorage.getItem('token')!;

    // this.headers = new HttpHeaders()
    //     .set('Authorization', this.token!);

    // if (!this.token) {
    //   this.headers = new HttpHeaders()
    //     .set('Authorization', 'no valid token');
    //     console.log('no token');
    // };

    return this.http.get(
      'https://yourroom.herokuapp.com/property',
      {
        headers: this.headers
      }
    );
  }
}
