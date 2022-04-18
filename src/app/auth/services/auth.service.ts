import { Injectable } from '@angular/core';
import { Auth, authState, User, signInWithPopup } from '@angular/fire/auth';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { EMPTY, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly user: Observable<User | null> = EMPTY;
  public token: string | null = null;

  constructor(private auth: Auth) {
    if (auth) {
      this.user = authState(this.auth);
      this.auth.onIdTokenChanged((user) => {
        user?.getIdToken().then((token) => {
          window.localStorage.setItem('x-token',token)
          this.token = token
        })
      })
    }
  }

  public isLoggedIn(): Observable<boolean> {
    return this.user.pipe(map((user) => (user ? true : false)));
  }

  login(email: string, password: string): Promise<string | null> {
    const res = signInWithEmailAndPassword(this.auth, email, password)
      .then((UserCredential) => {
        return UserCredential.user.getIdToken().then((token) => {
          window.localStorage.setItem('x-token', token);
          return token;
        });
      })
      .catch((err) => {
        return null;
      });
    return res;
  }

  loginWithGoogle(): Promise<string | null> {
    const provider = new GoogleAuthProvider();
    const res = signInWithPopup(this.auth, provider)
      .then((userCredential) => userCredential.user.getIdToken())
      .catch((err) => {
        return null;
      });
    return res;
  }
  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
