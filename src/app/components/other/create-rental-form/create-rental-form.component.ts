import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateRentalService } from 'src/app/services/online/create-rental.service';
import { HttpHeadersService } from 'src/app/services/other/http-headers.service';

@Component({
  selector: 'app-create-rental-form',
  templateUrl: './create-rental-form.component.html',
  styleUrls: ['./create-rental-form.component.scss']
})
export class CreateRentalFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private createRental: CreateRentalService,
    private router: Router,
    private http: HttpClient,
    private httpHeadersService: HttpHeadersService
  ) { }

  crossDomain: string = 'https://ancient-fjord-73536.herokuapp.com';

  form!: FormGroup;

  id!: number;

  selectedFile!: any;

  headers!: any;

  //location api
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
        this.http.get(
          `${this.crossDomain}/http://battuta.medunes.net/api/country/code/${this.selectedCountryCode}/?key=5101bc4ce4082219254f2b3871402060`
        ).subscribe((res: any) => {
          this.selectedCountry = res[0].name;

          this.http.post(
          'https://yourroom.herokuapp.com/location/save',
          {
            "country": `${this.selectedCountry}`,
            "location": `${cityInput.value}`,
            "province": `${this.selectedRegion}`
          },
          {
            headers: this.headers
          }
        ).subscribe((res: any) => {
          this.locationId = res.id;
        })

        });
      }
      else {
        this.locationId = res[0]?.id;
      }
    });

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      precio: ['', Validators.required],
      ambientes: ['', Validators.required],
      metrosCuadrados: ['', Validators.required],
      bano: ['', Validators.required],
      mobiliario: ['', Validators.required],
      mascotas: ['', Validators.required],
      fumador: ['', Validators.required],
      locationCountry: ['', Validators.required],
      locationRegion: ['', Validators.required],
      locationCity: ['', Validators.required],
      image: ['', Validators.required]
    })
  
    this.http.get(
      `${this.crossDomain}/http://battuta.medunes.net/api/country/all/?key=5101bc4ce4082219254f2b3871402060`
    ).subscribe((res) => {
      this.countries = res;
    });
  
  }

  processFile(imageInput: any){
    this.selectedFile = imageInput.files[0];
  }

  send(): void {

    try {
      this.createRental.createRental(this.form.value, this.locationId, this.selectedFile)
        .subscribe((res: any) => {
          this.id = res.id;
          this.router.navigate([`/rental/${this.id}`])
        })
    } catch (error) {
      }

  }

}
