import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaSalaComponent } from './crea-sala.component';

describe('CreaSalaComponent', () => {
  let component: CreaSalaComponent;
  let fixture: ComponentFixture<CreaSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
