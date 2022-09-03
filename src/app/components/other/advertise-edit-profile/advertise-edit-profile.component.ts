import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertise-edit-profile',
  templateUrl: './advertise-edit-profile.component.html',
  styleUrls: ['./advertise-edit-profile.component.scss']
})
export class AdvertiseEditProfileComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  send() {
    this.router.navigate(['/account'])
  }
}
