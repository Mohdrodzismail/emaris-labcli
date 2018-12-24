import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
    constructor(private http:HttpClient){}
    debugger
    public register(userData: any): Observable<any> {
        return this.http.post('api/v1/user/register', userData)
    }
} 