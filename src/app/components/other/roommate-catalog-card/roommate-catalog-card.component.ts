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

  // @Input() firstName: any = "Omar";
  // @Input() lastName: any = "Rodriguez";
  // @Input() img: any = "https://i.ibb.co/hD6hNcM/Rectangle-33.png";

  faComments = faComments;

  ngOnInit(): void {
  }

  send() {
  }
}
