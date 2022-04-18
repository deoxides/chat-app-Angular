import { Component, Input } from '@angular/core';
import { User, authState } from '@angular/fire/auth';
import { Message } from '../../interfaces/room';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable, EMPTY, empty } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  public user:Observable<User | null> = EMPTY;

  @Input() message!:Message
  @Input() time:string = '12-02-2021';

  constructor(public authService:AuthService){
      this.user = this.authService.user
      const date = new Date();
      this.time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

}
