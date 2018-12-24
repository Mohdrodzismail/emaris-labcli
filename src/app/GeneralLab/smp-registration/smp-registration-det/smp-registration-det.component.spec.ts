import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpRegistrationDetComponent } from './smp-registration-det.component';

describe('SmpRegistrationDetComponent', () => {
  let component: SmpRegistrationDetComponent;
  let fixture: ComponentFixture<SmpRegistrationDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmpRegistrationDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmpRegistrationDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
