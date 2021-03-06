import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AuthService } from './shared/auth.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: ':register', component: RegisterComponent}
  ];
@NgModule({
    declarations : [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        CommonModule
    ],
    providers: [
        AuthService
    ]

})
export class AuthModule{}