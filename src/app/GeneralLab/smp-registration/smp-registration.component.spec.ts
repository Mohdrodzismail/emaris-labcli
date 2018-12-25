import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpRegistrationComponent } from './smp-registration.component';

describe('SmpRegistrationComponent', () => {
  let component: SmpRegistrationComponent;
  let fixture: ComponentFixture<SmpRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmpRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmpRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
