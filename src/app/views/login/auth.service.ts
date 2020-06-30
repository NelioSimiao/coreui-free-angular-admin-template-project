import { User } from './../models/user';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  user = new BehaviorSubject<Customer>(null);

  constructor(private http: HttpClient) { }

  public login(customer: Customer): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: customer.username,
      password: customer.password
    }, httpOptions);
  }
  public logout(user: User) {
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public isLoggedIn() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
