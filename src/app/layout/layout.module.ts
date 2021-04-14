import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { ContacFormComponent } from './contac-form/contac-form.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainNavComponent,
    FooterComponent,
    LandPageComponent,
    ContacFormComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    MainNavComponent,
    FooterComponent,
    LandPageComponent,
    ContacFormComponent,
    AboutComponent]
})
export class LayoutModule { }
