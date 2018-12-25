import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpRegistrationDetDetailComponent } from './smp-registration-det-detail.component';

describe('SmpRegistrationDetDetailComponent', () => {
  let component: SmpRegistrationDetDetailComponent;
  let fixture: ComponentFixture<SmpRegistrationDetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmpRegistrationDetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmpRegistrationDetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
