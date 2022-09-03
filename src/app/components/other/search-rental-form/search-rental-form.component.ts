import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchRentalService } from 'src/app/services/online/search-rental.service';
import { HttpHeadersService } from 'src/app/services/other/http-headers.service';

@Component({
  selector: 'app-search-rental-form',
  templateUrl: './search-rental-form.component.html',
  styleUrls: ['./search-rental-form.component.scss']
})
export class SearchRentalFormComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder,
    private searchRentalService: SearchRentalService,
    private router: Router,
    private http: HttpClient,
    private httpHeadersService: HttpHeadersService
  ) {
    this.buildForm();
  }

  crossDomain: string = 'https://ancient-fjord-73536.herokuapp.com';
  headers: any;

  form!: FormGroup;

  // location api
  locationId: any;
  countries: any = [];
    selectedCountryCode!: any;
    selectedCountry!: any;
  regions: any = [];
    selectedRegion!: any;
  cities: any = [];

  setCountry(countryInput: any) {
    this.selectedCountryCode = countryInput.value

    this.http.get(
      `${this.crossDomain}/http://battuta.medunes.net/api/region/${this.selectedCountryCode}/all/?key=5101bc4ce4082219254f2b3871402060`
    ).subscribe((res) => {
      this.regions = res;
      // for (const item of this.regions) {
      //   item.region = item.region.slice(0, -9)
      // }
    })
  };

  setRegion(regionInput: any) {
    this.selectedRegion = regionInput.value;

    this.http.get(
      `${this.crossDomain}/http://battuta.medunes.net/api/city/${this.selectedCountryCode}/search/?region=${this.selectedRegion}&key=5101bc4ce4082219254f2b3871402060`
    ).subscribe((res) => {
      this.cities = res;
      // for (const city of this.cities) {
      //   city.city = city.city.slice(16)
      // }
    })
  };

  setCity(cityInput: any) {
    this.headers = this.httpHeadersService.getHeaders();
// &province=${this.selectedRegion}
    this.http.get(
      `https://yourroom.herokuapp.com/location/filter?location=${cityInput.value}`,
      {
        headers: this.headers
      }
    ).subscribe((res: any) => {
      if (res.length === 0){
        alert("no hay propiedades publicadas en esta ciudad")
      }
      else {
        this.locationId = res[0]?.id;
      }
    });

  }
  
  ngOnInit(): void {
    // this.http.get(
    //   `${this.crossDomain}/http://battuta.medunes.net/api/country/all/?key=5101bc4ce4082219254f2b3871402060`
    // ).subscribe((res) => {
    //   this.countries = res;
    // });

    localStorage.removeItem('filterRegion');
    localStorage.removeItem('filterCity');
    localStorage.removeItem('filterPets');
    localStorage.removeItem('filterBath');
    localStorage.removeItem('filterMinPrice');
    localStorage.removeItem('filterMaxPrice');
  }

  buildForm() {
    this.form = this.formBuilder.group({
      locationCountry: ['', Validators.required],
      locationRegion: ['', Validators.required],
      locationCity: ['', Validators.required],
      pet: ['', Validators.required],
      bath: ['', Validators.required],
      minPrice: ['', Validators.required],
      maxPrice: ['', Validators.required]
    })
  }

  send():void {
    this.searchRentalService.getAllRentals()
      .subscribe((res) => {
        
        this.router.navigate(['/rental-catalog']);
        localStorage.setItem('filterRegion', this.form.value.locationRegion);
        localStorage.setItem('filterCity', this.form.value.locationCity);
        localStorage.setItem('filterPets', this.form.value.pet);
        localStorage.setItem('filterBath', this.form.value.bath);
        localStorage.setItem('filterMinPrice', this.form.value.minPrice);
        localStorage.setItem('filterMaxPrice', this.form.value.maxPrice);
      },
      (err) => {
        console.log(err);
        if (err.status = 401) {
          console.log('err status 401 session timeout')
          this.router.navigate(['/login']);
        };
      }
      );
  }
}
