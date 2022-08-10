import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//rutas públicas
import { IndexComponent } from './components/pages/index/index.component';
// import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
// import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
// import { AccountComponent } from './components/pages/account/account.component';
// import { SelectRoleComponent } from './components/pages/select-role/select-role.component';
// import { RentalComponent } from './components/pages/rental/rental.component';
// import { ChatComponent } from './components/pages/chat/chat.component';
// import { NotFoundComponent } from './components/pages/not-found/not-found.component';

//rutas anfitrión
// import { CreateRentalComponent } from './components/pages/create-rental/create-rental.component';
// import { MyRentals } from './components/pages/my-rentals/my-rentals.component';

//rutas inquilino
// import { SearchRentalComponent } from './components/pages/search-rental/search-rental.component';
// import { SearchRoommateComponent } from './components/pages/search-roommate/search-roommate.component';


const routes: Routes = [
  //rutas públicas
  { path: '', component: IndexComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'account', component: AccountComponent },
  // { path: 'select-role', component: SelectRoleComponent },
  // { path: 'rental/:id', component: RentalComponent },
  // { path: 'chat', component: ChatComponent },
  // { path: '**', component: NotFoundComponent },

  //rutas anfitrión
  // { path: 'create-rental', component: CreateRentalComponent },
  // { path: 'my-rentals', component: MyRentalsComponent },

  //rutas inquilino
  // { path: 'search-rental', component: SearchRentalComponent },
  // { path: 'search-roommate', component: SearchRoommateComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
