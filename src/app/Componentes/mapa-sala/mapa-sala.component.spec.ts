import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaSalaComponent } from './mapa-sala.component';

describe('MapaSalaComponent', () => {
  let component: MapaSalaComponent;
  let fixture: ComponentFixture<MapaSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
