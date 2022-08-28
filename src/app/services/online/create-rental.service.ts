import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalInterface } from 'src/app/interfaces/rental-interface';

@Injectable({
  providedIn: 'root'
})
export class CreateRentalService {

  constructor(
    private http: HttpClient
  ) { }

  rental!: RentalInterface;

  token!: string;
  headers!: any;

  body: any;

  createRental(rental: RentalInterface) {

    this.body = {
      "ambient":rental.ambientes,
      "description":rental.descripcion,
      "direction":rental.direccion,
      "price":rental.precio,
      "pet":false,
      "bath":true,
      "furnished":false,
      "smoker":false,
      "squareMeter":rental.metrosCuadrados,
      "location":{"id":5}
    }

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

    let formData = new FormData();

    let propertyBlob = new Blob([
      JSON.stringify(this.body)
    ], {type : "application/json"});
    formData.set('property', propertyBlob);

    let postimagesBlob = new Blob([], {type : "image/png"});
    formData.set('postimages', postimagesBlob);

    return this.http.post(
      'https://yourroom.herokuapp.com/property/add',
      formData,
      {
        headers: this.headers
      }
    )
  }
}
