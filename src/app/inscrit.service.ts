import { Injectable } from '@angular/core';
import {Utilisateur} from "./utilisateur";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InscritService {

  constructor( private _http :HttpClient) { }

  public connexionUtilisaterADistance(utilisateur :Utilisateur):Observable<any>{
   return  this._http.post<any>('http://localhost:8080/connexion',utilisateur)
  }
}
