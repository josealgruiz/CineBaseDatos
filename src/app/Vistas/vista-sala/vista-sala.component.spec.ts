import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSalaComponent } from './vista-sala.component';

describe('VistaSalaComponent', () => {
  let component: VistaSalaComponent;
  let fixture: ComponentFixture<VistaSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
