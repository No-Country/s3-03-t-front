import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
// import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
// import { NotFoundComponent } from './components/pages/not-found/not-found.component';


const routes: Routes = [
  // { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
