import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SmpRegistrationService } from '../shared/smp-registration.servis'
import { Rental } from '../shared/smp-registration.models'

@Component({
  selector: 'eMaR-smp-registration-det-detail',
  templateUrl: './smp-registration-det-detail.component.html',
  styleUrls: ['./smp-registration-det-detail.component.scss']
})
export class SmpRegistrationDetDetailComponent implements OnInit {
 
  rental: Rental;

  constructor(private route: ActivatedRoute,
              private smpRegistrationService: SmpRegistrationService) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRental(params['rentalId']);
      }
    )
  }

  //getRental(rentalId: string){
  //   this.rental = this.smpRegistrationService.getRentalByID(rentalId)
  // }
  getRental(rentalId: string) {
    this.smpRegistrationService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      });
  }
}