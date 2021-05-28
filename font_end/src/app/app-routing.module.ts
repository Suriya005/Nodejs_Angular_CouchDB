import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:"**",
    redirectTo:"/",
    pathMatch:"full"
  },
  {
    path:"app-home" ,
    component:HomeComponent
  },
  {
    path:"app-login" ,
    component:LoginComponent
  },{
    path:"app-register" ,
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
