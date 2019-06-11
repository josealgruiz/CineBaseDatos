import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaSedeComponent } from './crea-sede.component';

describe('CreaSedeComponent', () => {
  let component: CreaSedeComponent;
  let fixture: ComponentFixture<CreaSedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaSedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
