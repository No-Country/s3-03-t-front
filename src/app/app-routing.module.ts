import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/online/auth.guard';

//rutas públicas
import { IndexComponent } from './components/pages/index/index.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
// import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { AccountComponent } from './components/pages/account/account.component';
import { SelectRoleComponent } from './components/pages/select-role/select-role.component';
import { RentalDetailComponent } from './components/pages/rental-detail/rental-detail.component';
// import { ChatComponent } from './components/pages/chat/chat.component';
// import { NotFoundComponent } from './components/pages/not-found/not-found.component';

//rutas anfitrión
import { CreateRentalComponent } from './components/pages/create-rental/create-rental.component';
import { MyRentalsComponent } from './components/pages/my-rentals/my-rentals.component';

//rutas inquilino
import { SearchRentalComponent } from './components/pages/search-rental/search-rental.component';
import { RentalCatalogComponent } from './components/pages/rental-catalog/rental-catalog.component';
import { SearchRoommateComponent } from './components/pages/search-roommate/search-roommate.component';
import { RoommateCatalogComponent } from './components/pages/roommate-catalog/roommate-catalog.component';
import { RentalCatalogCardComponent } from './components/other/rental-catalog-card/rental-catalog-card.component';
import { RoommateCatalogCardComponent } from './components/other/roommate-catalog-card/roommate-catalog-card.component';


const routes: Routes = [
  //rutas públicas
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'select-role', component: SelectRoleComponent, canActivate: [AuthGuard] },
  { path: 'rental/:id', component: RentalDetailComponent },
  // { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  // { path: '**', component: NotFoundComponent },

  //rutas anfitrión
  { path: 'create-rental', component: CreateRentalComponent
  // , canActivate: [AuthGuard] 
},
  { path: 'my-rentals', component: MyRentalsComponent, },

  //rutas inquilino
  { path: 'search-rental', component: SearchRentalComponent },
  { path: 'rental-catalog', component: RentalCatalogComponent },

  { path: 'card', component: RoommateCatalogCardComponent },

  { path: 'search-roommate', component: SearchRoommateComponent, canActivate: [AuthGuard] },
  { path: 'roommate-catalog', component: RoommateCatalogComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
