import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  public roomList:{title:String,description:String,price:Number,hotel:String,photo_url:String}[]=[];

  constructor(private roomsService:RoomsService) { }

  ngOnInit(): void {
    this.roomsService.getAllRooms().subscribe({
      next:(data)=>{
        this.roomList=data;
      },
      error:(error:Error)=>{},
      complete:()=>{}
    });
  }

}
