import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
 
  constructor(private http:HttpClient) {  
  }

  getAllRooms():Observable<Room[]>{
    return this.http.get(`${environment.apiBaseURI}/rooms/getroom`) as Observable<any>;
  }
}
