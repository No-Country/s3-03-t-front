import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/other/header/header.component';
import { FooterComponent } from './components/other/footer/footer.component';
import { IndexComponent } from './components/pages/index/index.component';
import { LoginComponent } from './components/pages/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HeaderSessionComponent } from './components/other/header-session/header-session.component';
import { LoginFormComponent } from './components/other/login-form/login-form.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { RegisterFormComponent } from './components/other/register-form/register-form.component';

import { HttpClientModule } from '@angular/common/http';
import { SelectRoleComponent } from './components/pages/select-role/select-role.component';
import { SearchRentalComponent } from './components/pages/search-rental/search-rental.component';
import { SearchRoommateComponent } from './components/pages/search-roommate/search-roommate.component';
import { SearchRentalFormComponent } from './components/other/search-rental-form/search-rental-form.component';
import { AdvertiseEditProfileComponent } from './components/other/advertise-edit-profile/advertise-edit-profile.component';
import { InfoCardComponent } from './components/other/info-card/info-card.component';
import { CreateRentalComponent } from './components/pages/create-rental/create-rental.component';
import { CreateRentalFormComponent } from './components/other/create-rental-form/create-rental-form.component';
import { RentalCatalogComponent } from './components/pages/rental-catalog/rental-catalog.component';
import { RentalCatalogCardComponent } from './components/other/rental-catalog-card/rental-catalog-card.component';
import { RentalDetailComponent } from './components/pages/rental-detail/rental-detail.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyRentalsComponent } from './components/pages/my-rentals/my-rentals.component';
import { AccountComponent } from './components/pages/account/account.component';
import { RoommateCatalogComponent } from './components/pages/roommate-catalog/roommate-catalog.component';
import { RoommateCatalogCardComponent } from './components/other/roommate-catalog-card/roommate-catalog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    HeaderSessionComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent,
    SelectRoleComponent,
    SearchRentalComponent,
    SearchRoommateComponent,
    SearchRentalFormComponent,
    AdvertiseEditProfileComponent,
    InfoCardComponent,
    CreateRentalComponent,
    CreateRentalFormComponent,
    RentalCatalogComponent,
    RentalCatalogCardComponent,
    RentalDetailComponent,
    MyRentalsComponent,
    AccountComponent,
    RoommateCatalogComponent,
    RoommateCatalogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
