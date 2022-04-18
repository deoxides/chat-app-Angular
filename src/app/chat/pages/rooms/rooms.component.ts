import {Component, OnInit,OnDestroy, ViewChild, OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@angular/fire/auth';
import { Subscription, of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';

import {  Room, RoomResponse } from '../../interfaces/room';

import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit,OnDestroy {
  public users:User[] = []
  public user!:User;
  public room!:Room;

  public message:string = ''

  @ViewChild('swal')
  private swal!: SwalComponent;

  private messageSubscription!:Subscription;

  constructor(
    private authService:AuthService,
    public chatService: ChatService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authService.user.subscribe((user) => this.user = user!);
  }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.chatService
        .checkRoom(id)
        .pipe(
          catchError(( error ) => (error.status === 404)?this.createRoom(id):of(null)),
          switchMap(() => this.chatService.connectRoom(id))
          )
        .subscribe((response) => {
          this.room = response
        });
    })
    this.messageSubscription = this.chatService.messageEvent.subscribe((newMessage) => {
        this.room.messages?.push(newMessage)
    })
  
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

  async createRoom(id:string):Promise<RoomResponse>{
    const options: SweetAlertOptions = {
      title:'Ops, this room does not exist',
      text:'Do you want to create it?',
      icon:'error',
      showCancelButton:true,
      showLoaderOnConfirm:true,
      preConfirm: () => this.chatService.createRoom(id)
    }
    this.swal.swalOptions = options;
    return await this.swal.fire().then((swalResult) => {
      if(swalResult.isConfirmed){
        return swalResult.value
      }
      else{
        this.router.navigate(['rooms/join'])
      }
    })
  }

  sendMessage(){
    const body = this.message;
      const newMessage = {
        from:this.user,
        body,
        createdAt: new Date()
      }
      console.log(newMessage)
      this.chatService.sendMessage(newMessage)
      this.message = ''
  }

  connectionError(){
    const options: SweetAlertOptions = {
      title: 'Ops, Connection error',
      text: 'Cannot establish connection with the server. Trying again in ',
      toast:true,
      icon: 'error',
      showCancelButton:false,
      timer:2000,
      timerProgressBar:true
    };
    this.swal.swalOptions = options;
    this.swal.fire()
  }
}
