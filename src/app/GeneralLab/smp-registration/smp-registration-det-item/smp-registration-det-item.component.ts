import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eMaR-smp-registration-det-item',
  templateUrl: './smp-registration-det-item.component.html',
  styleUrls: ['./smp-registration-det-item.component.scss']
})
export class SmpRegistrationDetItemComponent implements OnInit {
  @Input () rental: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
