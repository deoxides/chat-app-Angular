import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent{
  @Input() text:string = '';
  @Input() path:string = '';
  @Input() theme?:string = 'light';
  constructor() { }

}
