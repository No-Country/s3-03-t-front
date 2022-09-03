import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-roommate',
  templateUrl: './search-roommate.component.html',
  styleUrls: ['./search-roommate.component.scss']
})
export class SearchRoommateComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/roommate-catalog']);
  }

}
