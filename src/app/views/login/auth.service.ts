
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { User } from './user.model';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  //  user = new BehaviorSubject<Customer>(null);

  user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient) { }

  public login(userName: String, passWord: String) {
    return this.http.post<User>(AUTH_API + 'signin', {
      username: userName,
      password: passWord
    }, httpOptions).pipe(
      tap(respDate => {
        const user = this.createUser(respDate);
        this.user.next(user);
      }));
  }





  /* register(user): Observable<any> {
     return this.http.post(AUTH_API + 'signup', {
       username: user.username,
       email: user.email,
       password: user.password
     }, httpOptions);
   }
 
 
 
 
   public logout(user: any) {
     return localStorage.getItem('ACCESS_TOKEN') !== null;
 
   }
 
   public isLoggedIn() {
     localStorage.removeItem('ACCESS_TOKEN');
   }*/

  private createUser(respDate: User): User {
    const newuser = new User(respDate.email,
      respDate.username,
      respDate.token,
      respDate.type,
      respDate.roles);
    return newuser;
  }



}
