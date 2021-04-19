import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
 
  constructor(private http:HttpClient) {  
  }

  getAllRooms():Observable<any>{
    return this.http.get(`${environment.apiBaseURI}/rooms/getroom`) as Observable<any>;
  }
}
