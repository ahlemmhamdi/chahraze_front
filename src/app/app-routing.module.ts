import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './layout/land-page/land-page.component';
import { MakeReservationComponent } from './shared/reservation/make-reservation/make-reservation.component';
import { RoomListComponent } from './shared/rooms/room-list/room-list.component';
import { LoginComponent } from './shared/user/login/login.component';
import { RegisterComponent } from './shared/user/register/register.component';
import { AuthGuard } from './_helpers';


const routes: Routes = [
  {path:"",component:LandPageComponent},
  {path:"signup", component:RegisterComponent},
  {path:"signin",component:LoginComponent},
  {path:"room",component:RoomListComponent, canActivate:[AuthGuard]},
  {path:"reservation/:id",component:MakeReservationComponent,canActivate:[AuthGuard]},
  {path:"**", redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
