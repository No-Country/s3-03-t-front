import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-catalog-card',
  templateUrl: './rental-catalog-card.component.html',
  styleUrls: ['./rental-catalog-card.component.scss']
})
export class RentalCatalogCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input() bath!: string;
  // @Input() description!: string;
  // @Input() address!: string;
  // @Input() firstName!: string;
  // @Input() lastName!: string;
  @Input() furnished!: string;
  @Input() imgList!: any;
  // @Input() locationCity!: any;
  // @Input() locationState!: any;
  // @Input() locationCountry!: any;
  @Input() pets!: string;
  // @Input() price!: string;
  @Input() smoker!: string;
  // @Input() squareMeter!: string;

  // @Input() bath: string = "Baño compartido";
  @Input() description: string = "Departamento 2 ambientes cerca a facultad de medicina de la UBA con muy buena ventilación";
  @Input() address!: string;
  @Input() firstName: string = "Andrea";
  @Input() lastName: string = "Ortiz";
  // @Input() furnished: string = "Amoblado";
  // @Input() imgList: any = [{"fileUrl": "https://i.ibb.co/Lpq14Pg/Sin-t-tulo123.png"}];
  @Input() locationCity: any = "Caballito";
  @Input() locationState: any = "CABA";
  @Input() locationCountry: any = "Argentina";
  // @Input() pets: string = "Acepta mascotas";
  @Input() price!: string;
  // @Input() smoker: string = "No acepta fumadores";
  @Input() squareMeter: string = "12m2";

  bathVal!: boolean;
  furnishedVal!: boolean;
  petsVal!: boolean;
  smokerVal!: boolean;

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
  }

  openDetail() {
    this.router.navigate(['/rental:id'])
  }

}
