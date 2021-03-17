import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChambresComponent} from "./chambres/chambres.component";
import {NouveauChambresComponent} from "./nouveau-chambres/nouveau-chambres.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {ConnexionreussieComponent} from "./connexionreussie/connexionreussie.component";

const routes: Routes = [
  {
    path: 'chambres',
    component : ChambresComponent
  },
  {
    path:'nouveau-chambres',
    component:NouveauChambresComponent
  },
  /*{
    path:"", redirectTo:"/chambres",pathMatch:'full'
  },*/
  {
    path:"",
    component:ConnexionComponent
  },
  {
    path:"connexionreussie",
    component:ConnexionreussieComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
