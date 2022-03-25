import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SocketService } from 'src/app/socket/socket.service';

import { Message, Room } from '../interfaces/room';

@Injectable()
export class ChatService {
  constructor(private socket:SocketService) {
   }
  connectError():boolean{
    let error:boolean = false;
    this.socket.on('connect_error',() => {
      error = true
      this.socket.disconnect()
    })
    return error
   }
  connectRoom(name:string):Room{
    this.socket.connect()
    const room:Room = this.socket.emit('joinRoom',name,(room:Room) => {
      if(room){
        return room
      }else{
        return {}
      }
    })
    console.log(room)
    return room;
  }

  createRoom(name:string):Promise<boolean>{
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
    // <------------ Conection with socket --------------->//
    return new Promise((resolve,reject) => {
      this.socket.emit('createRoom',name,(result:Room) => {
        if(result){
          resolve(true)
        }
        else{
          resolve(false)
        }
      })
    })
  }

  searchRoom(name:string):Promise<boolean>{
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
    return new Promise((resolve,reject) => {
      this.socket.emit('searchRoom',name,(result:Room) => {
        if(result){
          resolve(true)
        }
        else{
          resolve(false)
        }
      })
    })
  }

  sendMessage(message:Message){
    let observable :Observable<Message> = new Observable(observer => {
      this.socket.on('message', (message:Message) => {
        observer.next(message);
      });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }
}
