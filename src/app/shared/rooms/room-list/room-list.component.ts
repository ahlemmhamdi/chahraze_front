import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../room.model';

import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  public roomList$:Observable<Room[]>;
  public roomQuery:string="";

  constructor(private roomsService:RoomsService) {
      this.roomList$=this.roomsService.getAllRooms();
     }

  ngOnInit(): void {
  }

}
