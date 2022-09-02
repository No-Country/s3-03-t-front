import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeadersService } from '../other/http-headers.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpHeadersService: HttpHeadersService,
    private http: HttpClient
  ) { }

  headers: any;

  body: any;

  getAllUsers() {
    this.headers = this.httpHeadersService.getHeaders();

    return this.http.get(
      'https://yourroom.herokuapp.com/user/all',
      {
        headers: this.headers
      }
    )
  }

  getUser(userId: any) {
    this.headers = this.httpHeadersService.getHeaders();
    return this.http.get(
      `https://yourroom.herokuapp.com/user/${userId}`,
      {
        headers: this.headers
      }
    );
  };

  editUser(user: any, img: any) {
    this.headers = this.httpHeadersService.getHeaders();

    this.body = {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "email": user.email
    }

    let formData = new FormData();

    let dataBlob = new Blob([
      JSON.stringify(this.body)
    ], {type: "application/json"});
    let imageBlob = new Blob([
      img
    ], {type: "image/png"});
    formData.append('user', dataBlob);
    formData.append('image', imageBlob);


    return this.http.put(
      'https://yourroom.herokuapp.com/user/update',
      formData,
      {
        headers: this.headers
      }
    )
  }

}
