import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHeadersService {

  constructor() { }

  token!: string;
  headers!: any;

  getHeaders() {
    this.token = localStorage.getItem('token')!;

    this.headers = new HttpHeaders().set('Authorization', this.token);

    if (!this.token) {
      this.headers = new HttpHeaders()
        .set('Authorization', 'no valid token');
        console.log('no token');
    };

    return this.headers;
  }
}
