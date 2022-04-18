import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { UserSmall } from '../../interfaces/room';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public users:UserSmall[] = [];
  constructor(private chatService:ChatService){
    this.chatService.userEvent.subscribe((users) => {
      this.users = users
      console.log(users)})
  }
}
