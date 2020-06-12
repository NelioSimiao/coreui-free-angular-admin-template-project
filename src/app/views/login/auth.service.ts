
import { Injectable } from '@angular/core';
import { User } from '../user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new BehaviorSubject<User>(null);

    constructor() { }

    public login(user: User) {
        localStorage.setItem('ACCESS_TOKEN', "access_token");

        this.user.next(user);

    }

    public logout(user: User) {
        return localStorage.getItem('ACCESS_TOKEN') !== null;

    }

    public isLoggedIn() {
        localStorage.removeItem('ACCESS_TOKEN');
    }
}