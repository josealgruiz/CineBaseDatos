import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaLandingComponent } from './vista-landing.component';

describe('VistaLandingComponent', () => {
  let component: VistaLandingComponent;
  let fixture: ComponentFixture<VistaLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
