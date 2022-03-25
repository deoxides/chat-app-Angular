import { User as FireUser } from "firebase/auth";

export interface Message{
    body:string
}

export interface User extends FireUser{
    username:string
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
