import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import { map,catchError } from 'rxjs/operators'

import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatGuard implements CanActivate, CanActivateChild {

  constructor(private auth:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isLoggedIn()
    .pipe(
      map((user) => {
        if(!user){
          this.router.navigate(['auth/login'])
          return false;
        }else{
          return true
        }
      }),
      catchError((err) => {
        return of(false)
      })
    )
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.isLoggedIn()
      .pipe(
        map((user) => {
          if(!user){
            this.router.navigate(['auth/login'])
            return false;
          }else{
            return true
          }
        }),
        catchError((err) => {
          return of(false)
        })
      )
  }
  
}
