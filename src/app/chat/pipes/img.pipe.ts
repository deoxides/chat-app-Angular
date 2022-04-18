import { Pipe, PipeTransform } from '@angular/core';
import {User} from '@angular/fire/auth'
import { UserSmall } from '../interfaces/room';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(user:User): string {
    if(user?.providerData[0]?.photoURL){
      return user.providerData[0].photoURL
    }
    return '/assets/images/Default.png'
  }

}
