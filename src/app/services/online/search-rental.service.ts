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

  token!: string;
  headers!: any;

  getAllRentals() {

    //busca el token en el localstorage y setea los headers
    this.token = localStorage.getItem('token')!;

    this.headers = new HttpHeaders()
        .set('Authorization', this.token!);

    //pendiente fixear esto de otra manera
    if (!this.token) {
      this.headers = new HttpHeaders()
        .set('Authorization', 'no valid token');
        console.log('no token');
    };

    return this.http.get(
      'https://yourroom.herokuapp.com/property',
      {
        headers: this.headers
      }
    );
  }
}
