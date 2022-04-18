import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad{
  constructor(private auth:AuthService,private router:Router){
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean{
    return this.auth.isLoggedIn()
    .pipe(map(state => (state) ? false : true))
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    return this.auth.isLoggedIn()
    .pipe(map(state => (state) ? false : true))
  }

}
