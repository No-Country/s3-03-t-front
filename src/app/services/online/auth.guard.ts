import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const token = localStorage.getItem('token');
      let isAuthenticated = false;

      if (token) {
        isAuthenticated = true;
      }
      if (!isAuthenticated) {
          this.router.navigate(['/login']);
      }
      return isAuthenticated;
  }
  
}
