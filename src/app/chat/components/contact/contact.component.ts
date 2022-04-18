import { Component, Input } from '@angular/core';
import { UserSmall } from '../../interfaces/room';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles:[`
  img{
    max-height:50px;
    border-radius: 50%;
  }
  `]
})
export class ContactComponent {
  @Input() user!:UserSmall;

  constructor() {}

}
