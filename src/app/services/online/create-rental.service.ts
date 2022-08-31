import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalInterface } from 'src/app/interfaces/rental-interface';
import { HttpHeadersService } from '../other/http-headers.service';

@Injectable({
  providedIn: 'root'
})
export class CreateRentalService {

  constructor(
    private http: HttpClient,
    private httpHeaders: HttpHeadersService
  ) { }

  rental!: RentalInterface;

  token!: string;
  headers!: any;

  body: any;

  createRental(rental: RentalInterface, img: any) {

    this.headers = this.httpHeaders.getHeaders();

    this.body = {
      "ambient": rental.ambientes,
      "description": rental.descripcion,
      "direction": rental.direccion,
      "price": rental.precio,
      "pet": rental.mascotas,
      "bath": rental.bano,
      "furnished": rental.mobiliario,
      "smoker": rental.fumador,
      "squareMeter": rental.metrosCuadrados,
      "location": {"id": rental.location}
    }

    console.log(this.body);

    let formData = new FormData();

    let propertyBlob = new Blob([
      JSON.stringify(this.body)
    ], {type : "application/json"});
    formData.set('property', propertyBlob);

    let postimagesBlob = new Blob([
      img
    ], {type : "image/png"});
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
