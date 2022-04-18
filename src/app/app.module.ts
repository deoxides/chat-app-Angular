import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseModule } from './firebase/firebase.module';
import { MaterialModule } from './material/material.module';
import { SocketModule } from './socket/socket.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SocketService } from './socket/socket.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    MaterialModule,
    SocketModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { };
