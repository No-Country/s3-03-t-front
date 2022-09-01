import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringToBooleanService {

  constructor() { }

  convert(rental: any) {
    if (rental.bath === 'true') {
      rental.bath = true;
    }
    if (rental.furnished === 'true') {
      rental.furnished = true;
    }
    if (rental.pets === 'true') {
      rental.pets = true;
    }
    if (rental.smoker === 'true') {
      rental.smoker = true;
    }
    return rental;
  }
}
