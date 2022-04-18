import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { MaterialModule } from '../material/material.module';
import { ChatRoutingModule } from './chat-routing.module';

import { ProfileComponent } from './pages/profile/profile.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

import { MessageComponent } from './components/message/message.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SharedModule } from '../shared/shared.module';
import { SocketModule } from '../socket/socket.module';
import { ChatService } from './services/chat.service';
import { JoinComponent } from './pages/join/join.component';
import { ImgPipe } from './pipes/img.pipe';
import { ContactComponent } from './components/contact/contact.component';




@NgModule({
  declarations: [
    ProfileComponent,
    RoomsComponent,
    MessageComponent,
    SidebarComponent,
    JoinComponent,
    ImgPipe,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SocketModule,
    ChatRoutingModule,
    SharedModule,
    SweetAlert2Module
  ],
  providers:[
    ChatService
  ]
})
export class ChatModule { }
