import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauChambresComponent } from './nouveau-chambres.component';

describe('NouveauChambresComponent', () => {
  let component: NouveauChambresComponent;
  let fixture: ComponentFixture<NouveauChambresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauChambresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauChambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
