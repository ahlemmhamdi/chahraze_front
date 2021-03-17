import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChambresComponent } from './chambres/chambres.component';
import { NouveauChambresComponent } from './nouveau-chambres/nouveau-chambres.component';
import {HttpClientModule} from "@angular/common/http";
import { ConnexionComponent } from './connexion/connexion.component';
import { InscritComponent } from './inscrit/inscrit.component';
import {FormsModule} from "@angular/forms";
import { ConnexionreussieComponent } from './connexionreussie/connexionreussie.component';


@NgModule({
  declarations: [
    AppComponent,
    ChambresComponent,
    NouveauChambresComponent,
    ConnexionComponent,
    InscritComponent,
    ConnexionreussieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
