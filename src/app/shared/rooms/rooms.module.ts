import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RoomFilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    RoomListComponent,
    RoomFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports:[RoomFilterPipe]
})
export class RoomsModule { }
