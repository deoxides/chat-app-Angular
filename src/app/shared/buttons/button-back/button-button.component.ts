import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss']
})
export class ButtonBackComponent{
  @Input() text:string = '';
  @Input() theme?:string = 'light';
  constructor(private location:Location) { }

  goBack(){
    this.location.back();
  }
}

