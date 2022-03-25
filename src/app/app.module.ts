//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Custom Modules
import { FirebaseModule } from './firebase/firebase.module';
import { SocketModule } from './socket/socket.module';
//Routes
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ChatModule } from './chat/chat.module';
import { SocketService } from './socket/socket.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    //Services Modules
    FirebaseModule,
    SocketModule,
    //Routes Modules
    AppRoutingModule,
    //App Modules
    AuthModule,
    HomeModule,
    ChatModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
