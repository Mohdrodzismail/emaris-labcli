import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'eMaR-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any = {};
  errors: any = [];


  constructor(private auth: AuthService, 
              private router: Router) { }

  ngOnInit() {
    this.formData = {};
  }

  register(){
    //debugger;
    this.auth.register(this.formData).subscribe(
      () => {
        //console.log('Successfully Registered');
        this.router.navigate(['/login',{register:'Success'}]);
      },
      (errorResponse) => {
        debugger;
        this.errors = errorResponse.error.errors;
      }
    )   
    
  }
}
