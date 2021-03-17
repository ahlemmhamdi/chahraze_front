import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {InscritService} from "../inscrit.service";
import {Utilisateur} from "../utilisateur";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
 utilisateur=new Utilisateur();
 msg='';
  constructor(private _service : InscritService , private _router : Router) { }

  ngOnInit(): void {
  }
  connexionutilisateur(){
this._service.connexionUtilisaterADistance(this.utilisateur).subscribe(
  data=>{
    console.log("reponse recu");
this._router.navigate(['/connexionreussie'])
    },
  error =>{console.log("exception");
  this.msg="mauvaise informations , s'il vous plait entrer le mail et le mot de passe valide"}
);
  }
}
