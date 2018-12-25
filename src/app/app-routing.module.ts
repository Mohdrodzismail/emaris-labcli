import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmpRegistrationComponent } from './GeneralLab/smp-registration/smp-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/SmpRegistration', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
