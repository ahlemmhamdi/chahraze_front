import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  pic1 = 'assets/images/fa.jpg';
  pic2 = 'assets/images/classique.jpg';
  pic3 = 'assets/images/chambre.jpg';
  pic4 = 'assets/images/a.jpg';
  pic5 = 'assets/images/7b.jpg';
  pic6 = 'assets/images/da.jpg';
  pic7 = 'assets/images/dd.jpg';
  pic8 = 'assets/images/chambre_lux.jpg';
  pic9 = 'assets/images/cla.jpg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
