import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable, EMPTY, of, Subscriber } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { SocketService } from 'src/app/socket/socket.service';

import { Message, Room, RoomResponse, UserSmall } from '../interfaces/room';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class ChatService {
  public room: Observable<Room> = EMPTY;
  @Output() userEvent: EventEmitter<UserSmall[]> = new EventEmitter();
  @Output() messageEvent: EventEmitter<Message> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private socket: SocketService,
    private auth:AuthService
    ) {
      this.socket.on('newMessage',(message:Message) => this.messageEvent.emit(message));
      this.socket.on('userJoined',(user:UserSmall[])=> this.userEvent.emit(user));
      this.socket.on('userLeft',(user:UserSmall[])=> this.userEvent.emit(user));
  }
  connectError(): Observable<boolean> {
    return new Observable((obs) => {
      this.socket.on('connect_error', () => {
        obs.next(true);
      }),
        this.socket.on('connect', () => {
          obs.next(false);
        });
    });
  }
  checkRoom(name: string): Observable<RoomResponse> {
    const header = {'x-token':this.auth.token as string};
    const url = `${environment.server.url}/rooms/${name}`;
    return this.http.get<RoomResponse>(
      url,
      {headers:header}
    );
  }

  connectRoom(name: string):Promise<Room>{
    return new Promise((resolve,reject) => {
      this.socket.connect();
      this.socket.emit('joinRoom',name, (response: Room) => {
        if (response) {
          this.room = of<Room>(response);
          resolve(response)
        }
      });
    })
  }
  // connectRoom(name:string):Promise<Room>{
  //   this.socket.connect();
  //   return new Promise((resolve,reject) => {
  //     this.socket.emit('joinRoom', name, (response:Room) => {
  //       if(response){
  //         resolve(response)
  //       }else{
  //         reject('No Room')
  //       }
  //     })
  //   })
  // }

  createRoom(id: string): Observable<RoomResponse> {
    // <------------ Conection with server --------------->//
    // const room:Room = {name};
    // const resp = fetch(`${environment.socket.url}rooms/newRoom`,{
    //   method:'POST',
    //   headers:{
    //     'Content-type':'application/json'
    //   },
    //   body:JSON.stringify(room)
    // })
    // .then((res) => res.json())
    // .then((room:RoomResponse) => {
    //   if(room.data.name){
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    // })
    // .catch((err) => {
    //   return false;
    // })
    // return resp;
    // // <------------ Conection with socket --------------->//
    // return new Promise((resolve,reject) => {
    //   this.socket.emit('createRoom',id,(result:Room) => {
    //     if(result){
    //       resolve(result)
    //     }
    //     else{
    //       resolve(undefined)
    //     }
    //   })
    // })
    // // <------------ Conection with Server Observables --------------->//
    const header = {'x-token':this.auth.token as string}
    const url = `${environment.server.url}/rooms/newRoom`
    const body = JSON.stringify({name:id})
    return this.http.post<RoomResponse>(
      url,
      body,
      {headers:{
        'Content-Type':'application/json',
        ...header
      }});
  }

  searchRoom(name: string): Promise<boolean> {
    // <------------ Conection with server --------------->//
    // const room = fetch(`${environment.socket.url}rooms/${name}`)
    // .then((res) => res.json())
    // .then((room:RoomResponse) => {
    //   if(room.data.name){
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    // })
    // .catch((err) => {
    //   return false;
    // })
    // <------------ Conection with socket --------------->//
    return new Promise((resolve, reject) => {
      this.socket.emit('searchRoom', name, (result: Room) => {
        if (result) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  sendMessage(message:Message){
    this.socket.emit('newMessage',message)
  }
}
