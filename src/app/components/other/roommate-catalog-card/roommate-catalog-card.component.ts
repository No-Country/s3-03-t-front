import { Component, Input, OnInit } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-roommate-catalog-card',
  templateUrl: './roommate-catalog-card.component.html',
  styleUrls: ['./roommate-catalog-card.component.scss']
})
export class RoommateCatalogCardComponent implements OnInit {

  constructor() { }

  @Input() firstName: any;
  @Input() lastName: any;
  @Input() img: any;

  faComments = faComments;

  ngOnInit(): void {
  }

  send() {
  }
}
