import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './smp-registration.models'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SmpRegistrationService {
    constructor(private http:HttpClient){}

    public getRentalById(rentalID:string): Observable<any> {
        //return  this.http.get('localhost:3001/api/v1/SmpRegistration' + rentalID);
        return  this.http.get('/api/v1/SmpRegistration' + rentalID); //using proxy
    }
    public getRentals(): Observable<any> {
        //return  this.http.get('localhost:3001/api/v1/SmpRegistration');
        return  this.http.get('/api/v1/SmpRegistration'); //using proxy
    }
} 