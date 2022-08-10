import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
// import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
// import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
// import { SelectRoleComponent } from './components/pages/select-role/select-role.component';
// import { SearchRentalComponent } from './components/pages/search-rental/search-rental.component';
// import { SearchRoommateComponent } from './components/pages/search-roommate/search-roommate.component';
// import { NotFoundComponent } from './components/pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'select-role', component: SelectRoleComponent },
  // { path: 'search-rental', component: SearchRentalComponent },
  // { path: 'search-roommate', component: SearchRoommateComponent }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
