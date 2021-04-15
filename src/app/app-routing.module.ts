import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './layout/land-page/land-page.component';
import { LoginComponent } from './shared/user/login/login.component';
import { RegisterComponent } from './shared/user/register/register.component';



//TODO: To add more routes to test authgards

const routes: Routes = [
  {path:"",component:LandPageComponent},
  {path:"signup", component:RegisterComponent},
  {path:"signin",component:LoginComponent},
  {path:"**", redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
