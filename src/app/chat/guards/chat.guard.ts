import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  RouterStateSnapshot,
  Router,
  Route,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.auth.isLoggedIn().pipe(
      map((state) => {
        if (!state) {
          this.router.navigate(['auth/login']);
          return false;
        } else {
          return true;
        }
      }),
      catchError((err) => {
        return of(false);
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.auth.isLoggedIn().pipe(
      map((state) => {
        if (!state) {
          this.router.navigate(['auth/login']);
          return false;
        } else {
          return true;
        }
      }),
      catchError((err) => {
        return of(false);
      })
    );
  }
  canLoad(route: Route,segments: UrlSegment[]):Observable<boolean> | boolean{
    return this.auth.isLoggedIn()
             .pipe(
               map((state) => {
                 if(!state){
                   this.router.navigate(['./auth/login'])
                   return false
                 }
                 return true
               })
             )
  }
}
