import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

import { Room } from '../../interfaces/room';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  public room:Room = {name:''}

  
  constructor(private chatService:ChatService, private router:ActivatedRoute){}

  ngOnInit(): void {
    const {id} = this.router.snapshot.params
    this.room = this.chatService.connectRoom(id)
  }
}
