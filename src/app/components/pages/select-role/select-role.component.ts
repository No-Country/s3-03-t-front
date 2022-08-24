import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-role',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.scss']
})
export class SelectRoleComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectAnfitrion() {
    this.router.navigate(['/my-rentals']);
  }

  selectInquilino() {
    this.router.navigate(['/search-rental']);
  }

}
