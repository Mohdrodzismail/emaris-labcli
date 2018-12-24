import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { SmpRegistrationComponent } from './smp-registration.component';
import { SmpRegistrationDetComponent } from './smp-registration-det/smp-registration-det.component';
import { SmpRegistrationDetItemComponent } from './smp-registration-det-item/smp-registration-det-item.component';

import { SmpRegistrationService } from './shared/smp-registration.servis';
import { SmpRegistrationDetDetailComponent } from './smp-registration-det-detail/smp-registration-det-detail.component'

const routes: Routes = [
    { path: 'SmpRegistration', 
      component: SmpRegistrationComponent,
      children: [
        { path: '', component: SmpRegistrationDetComponent},
        { path: ':rentalId', component: SmpRegistrationDetDetailComponent}
      ]
    }
  ];
@NgModule({
    declarations : [
        SmpRegistrationComponent,
        SmpRegistrationDetComponent,
        SmpRegistrationDetItemComponent,
        SmpRegistrationDetDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    providers: [SmpRegistrationService]

})
export class SmpRegistrationModule{}