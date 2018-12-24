import { Component, OnInit } from '@angular/core';
import { SmpRegistrationService } from '../shared/smp-registration.servis';
import { Rental } from '../shared/smp-registration.models'

@Component({
  selector: 'eMaR-smp-registration-det',
  templateUrl: './smp-registration-det.component.html',
  styleUrls: ['./smp-registration-det.component.scss']
})
export class SmpRegistrationDetComponent implements OnInit {
  rentals: any[] = [];

  constructor(private smpRegistrationService: SmpRegistrationService) { }

  ngOnInit() {
    const rentalObservable = this.smpRegistrationService.getRentals();

    rentalObservable.subscribe(
      (data: Rental[]) => {
        this.rentals = data;
        //this.rentals[0].id;
      },
      
      (err) => {

      },
      () => {

      });
  }
}

