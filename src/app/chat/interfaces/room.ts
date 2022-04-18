import { User } from '@angular/fire/auth';

export interface Message{
    from:User;
    body:string;
    to?:User;
    createdAt:Date;
}

export interface Room{
    name:string;
    users?:User[];
    messages?:Message[];
}

export interface RoomResponse{
    msg?:string;
    data:Room
}

export interface UserSmall{
    email:string;
    username:string;
    photoUrl?:string;
}
