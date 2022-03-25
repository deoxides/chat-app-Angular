import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ChatRoutingModule } from './chat-routing.module';

import { ProfileComponent } from './pages/profile/profile.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { IndexComponent } from './pages/index/index.component';

import { MessageComponent } from './components/message/message.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SocketModule } from '../socket/socket.module';
import { ChatService } from './services/chat.service';




@NgModule({
  declarations: [
    IndexComponent,
    ProfileComponent,
    RoomsComponent,
    MessageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
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
