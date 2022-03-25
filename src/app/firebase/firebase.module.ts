import { NgModule } from '@angular/core';

//Firebase
import {provideFirebaseApp, getApp,initializeApp} from '@angular/fire/app';
//Firebase Auth
import {provideAuth,getAuth} from '@angular/fire/auth'
//FireStore
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
//env
import {environment} from '../../environments/environment'


@NgModule({
  declarations: [],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
})
export class FirebaseModule { }
