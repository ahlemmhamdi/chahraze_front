import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './login/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  postUser(user:IUser):Observable<any>{
      return this.httpClient.post(`${environment.apiBaseURI}/users/auth/signup`,user) as Observable<any>;
  }

  deleteUser(id:any){
    return this.httpClient.delete(`${environment.apiBaseURI}/users/delete/${id}`) as Observable<any>;;
  }

  updateUserRole(id:any,role:any):Observable<any>{
   return this.httpClient.put(`${environment.apiBaseURI}/users/update/role/${id}`,{"new_role":role}) as Observable<any>;
  }

  updateUser(id:any,user:any):Observable<any>{
     let _user={...user};
    return this.httpClient.put(`${environment.apiBaseURI}/users/update/${id}`,_user) as Observable<any>;
  }

  getAllUsers(){
    return this.httpClient.get(`${environment.apiBaseURI}/users`) as Observable<any>;
  }

  getUserById(id:any){
    return this.httpClient.get(`${environment.apiBaseURI}/api/v1/users/user/${id}`) as Observable<any>;
  }
}
