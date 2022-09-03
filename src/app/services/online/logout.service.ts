import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  disconnect() {
    this.http.get(
      'yourroom.herokuapp.com/auth/logout'
    );
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
