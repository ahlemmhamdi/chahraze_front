import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionreussieComponent } from './connexionreussie.component';

describe('ConnexionreussieComponent', () => {
  let component: ConnexionreussieComponent;
  let fixture: ComponentFixture<ConnexionreussieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionreussieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionreussieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
