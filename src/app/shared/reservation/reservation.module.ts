import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MakeReservationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports:[MakeReservationComponent]
})
export class ReservationModule { }
