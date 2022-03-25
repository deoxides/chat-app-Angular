import { Injectable } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import {
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { EMPTY,map,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly user: Observable<User | null> = EMPTY;

  constructor( private auth: Auth) {
    if (auth) {
      this.user = authState(this.auth);
    }
  }

  public isLoggedIn() {
    return this.user.pipe(map((user) => {
      if(user){
        return true;
      }
      else{
        return false
      }
    }));
}

  login(email: string, password: string): Promise<string | null> {
    const res = signInWithEmailAndPassword(this.auth, email, password)
      .then((UserCredential) => UserCredential.user.getIdToken())
      .catch((err) => {
        return null;
      });
    return res;
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
