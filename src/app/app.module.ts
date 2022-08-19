import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    SearchRoommateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
