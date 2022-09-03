import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchRentalService } from 'src/app/services/online/search-rental.service';
import { StringToBooleanService } from 'src/app/services/other/string-to-boolean.service';

//icons
import { faMapMarkerAlt, faRulerCombined, faBath, faCouch, faPaw, faSmoking, faListUl } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute ,
    private searchRentalService: SearchRentalService,
    private stringToBoolean: StringToBooleanService
  ) { }

  id!: string;
  rental!: any;

  // icons
  faMapMarkerAlt = faMapMarkerAlt;
  faRulerCombined = faRulerCombined;
  faBath = faBath;
  faCouch = faCouch;
  faPaw = faPaw;
  faSmoking = faSmoking;
  faListUl = faListUl;

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')!;

    this.searchRentalService.getRental(this.id)
      .subscribe((res) => {
        this.rental = res;
      });

    }

}
