import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import {catchError ,map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private auth:AuthService,private router:Router){
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>{
    return this.auth.isLoggedIn()
    .pipe(
      map((user) => {
        if(!user){
          return true;
        }else{
          return false
        }
      }),
      catchError((err) => {
        return of(false)
      })
    )
  }
}
