import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.user.pipe((take(1)),
            map(user => {
                const isThereUser = user ? true : false;

                if (isThereUser) {
                    return true;
                }
                return this.router.createUrlTree((['/']));
                // return !user ? false : true;
            }));
    }

}