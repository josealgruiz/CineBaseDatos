import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSedeComponent } from './vista-sede.component';

describe('VistaSedeComponent', () => {
  let component: VistaSedeComponent;
  let fixture: ComponentFixture<VistaSedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
