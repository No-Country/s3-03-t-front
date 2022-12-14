import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//icons
import { faMapMarkerAlt, faRulerCombined, faBath, faCouch, faPaw, faSmoking, faExternalLinkAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rental-catalog-card',
  templateUrl: './rental-catalog-card.component.html',
  styleUrls: ['./rental-catalog-card.component.scss']
})
export class RentalCatalogCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  //role service
  role!: string;
  anfitrion!: boolean;
  inquilino!: boolean;

  //imputs
  @Input() id!: string;
  @Input() bath!: string;
  @Input() description!: string;
  @Input() address!: string;
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() furnished!: string;
  @Input() imgList!: any;
  @Input() locationCity!: any;
  @Input() locationState!: any;
  @Input() locationCountry!: any;
  @Input() pets!: string;
  @Input() price!: string;
  @Input() smoker!: string;
  @Input() squareMeter!: string;

  //boolean values
  bathVal!: boolean;
  furnishedVal!: boolean;
  petsVal!: boolean;
  smokerVal!: boolean;

  // icons
  faMapMarkerAlt = faMapMarkerAlt;
  faRulerCombined = faRulerCombined;
  faBath = faBath;
  faCouch = faCouch;
  faPaw = faPaw;
  faSmoking = faSmoking;
  faExternalLinkAlt = faExternalLinkAlt;
  faEdit = faEdit;

  ngOnInit(): void {
    if (this.bath === 'true') {
      this.bathVal = true;
    }
    if (this.furnished === 'true') {
      this.furnishedVal = true;
    }
    if (this.pets === 'true') {
      this.petsVal = true;
    }
    if (this.smoker === 'true') {
      this.smokerVal = true;
    }

    this.role = localStorage.getItem('rol')!;
    if(this.role === 'owner') {
      this.anfitrion = true;
      this.inquilino = false;
    } else if (this.role === 'tenant') {
      this.inquilino = true;
      this.anfitrion = false;
    }
  }

  openDetail(id: string) {
    this.router.navigate([`/rental/${id}`])
  }

}
