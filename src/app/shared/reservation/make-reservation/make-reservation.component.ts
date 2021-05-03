import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {

  constructor(  
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => params.getAll("id"))
        ).subscribe(console.log);

  }

}
