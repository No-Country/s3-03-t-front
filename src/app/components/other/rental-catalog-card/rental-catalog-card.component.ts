import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-catalog-card',
  templateUrl: './rental-catalog-card.component.html',
  styleUrls: ['./rental-catalog-card.component.scss']
})
export class RentalCatalogCardComponent implements OnInit {

  constructor() { }

  @Input() bath!: string;
  // @Input() description!: string;
  // @Input() address!: string;
  // @Input() firstName!: string;
  // @Input() lastName!: string;
  // @Input() furnished!: string;
  // @Input() imgList!: any;
  // @Input() locationCity!: any;
  // @Input() locationState!: any;
  // @Input() locationCountry!: any;
  // @Input() pets!: string;
  // @Input() price!: string;
  @Input() smoker!: string;
  // @Input() squareMeter!: string;

  // @Input() bath: string = "Baño compartido";
  @Input() description: string = "Departamento 2 ambientes cerca a facultad de medicina de la UBA con muy buena ventilación";
  @Input() address!: string;
  @Input() firstName: string = "Andrea";
  @Input() lastName: string = "Ortiz";
  @Input() furnished: string = "Amoblado";
  @Input() imgList: any = [{"fileUrl": "https://i.ibb.co/Lpq14Pg/Sin-t-tulo123.png"}];
  @Input() locationCity: any = "Caballito";
  @Input() locationState: any = "CABA";
  @Input() locationCountry: any = "Argentina";
  @Input() pets: string = "Acepta mascotas";
  @Input() price!: string;
  // @Input() smoker: string = "No acepta fumadores";
  @Input() squareMeter: string = "12m2";

  smokerVal!: boolean;

  bathVal: boolean = (this.bath === 'true');

  ngOnInit(): void {
    if (this.smoker === 'true') {
      this.smokerVal = true;
    }
  }

}
