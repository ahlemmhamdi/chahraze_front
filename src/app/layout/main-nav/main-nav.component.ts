import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  ngOnInit(): void {
  }

}
