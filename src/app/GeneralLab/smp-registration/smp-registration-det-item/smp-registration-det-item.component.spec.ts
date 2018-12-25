import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpRegistrationDetItemComponent } from './smp-registration-det-item.component';

describe('SmpRegistrationDetItemComponent', () => {
  let component: SmpRegistrationDetItemComponent;
  let fixture: ComponentFixture<SmpRegistrationDetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmpRegistrationDetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmpRegistrationDetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
