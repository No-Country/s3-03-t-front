import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/online/auth.guard';

//rutas públicas
import { IndexComponent } from './components/pages/index/index.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
// import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
// import { AccountComponent } from './components/pages/account/account.component';
import { SelectRoleComponent } from './components/pages/select-role/select-role.component';
// import { RentalComponent } from './components/pages/rental/rental.component';
// import { ChatComponent } from './components/pages/chat/chat.component';
// import { NotFoundComponent } from './components/pages/not-found/not-found.component';

//rutas anfitrión
import { CreateRentalComponent } from './components/pages/create-rental/create-rental.component';
// import { MyRentals } from './components/pages/my-rentals/my-rentals.component';

//rutas inquilino
import { SearchRentalComponent } from './components/pages/search-rental/search-rental.component';
import { RentalCatalogComponent } from './components/pages/rental-catalog/rental-catalog.component';
import { SearchRoommateComponent } from './components/pages/search-roommate/search-roommate.component';
import { RentalCatalogCardComponent } from './components/other/rental-catalog-card/rental-catalog-card.component';


const routes: Routes = [
  //rutas públicas
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'select-role', component: SelectRoleComponent, canActivate: [AuthGuard] },
  // { path: 'rental/:id', component: RentalComponent },
  // { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  // { path: '**', component: NotFoundComponent },

  //rutas anfitrión
  { path: 'create-rental', component: CreateRentalComponent
  // , canActivate: [AuthGuard] 
},
  // { path: 'my-rentals', component: MyRentalsComponent, canActivate: [AuthGuard] },

  //rutas inquilino
  { path: 'search-rental', component: SearchRentalComponent
  // , canActivate: [AuthGuard] 
},
  { path: 'rental-catalog', component: RentalCatalogComponent
  // , canActivate: [AuthGuard]
},

  { path: 'card', component: RentalCatalogCardComponent },

  { path: 'search-roommate', component: SearchRoommateComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
