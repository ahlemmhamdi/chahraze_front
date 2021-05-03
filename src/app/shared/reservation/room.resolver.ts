import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RoomsService } from '../rooms/rooms.service';

@Injectable({
  providedIn: 'root'
})
export class RoomResolver implements Resolve<boolean> {

  constructor(private roomService:RoomsService){

  }
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.roomService.getRoomById(route.params.id);
  }
}
