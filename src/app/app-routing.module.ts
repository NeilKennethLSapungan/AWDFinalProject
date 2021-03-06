import { HomeComponent } from './home/home.component';
import { RegisterSignInComponent } from './register-sign-in/register-sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    component: RegisterSignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path : '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
