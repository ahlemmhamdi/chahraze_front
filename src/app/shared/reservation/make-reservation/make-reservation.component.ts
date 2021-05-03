import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Room } from '../../rooms/room.model';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {
  public currentRoom:Room={title:'',description:'',hotel:'',photo_url:'',price:0};;

  constructor(  
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.currentRoom= this.route.snapshot.data.room as Room;
    console.dir(this.currentRoom);
  }

}
