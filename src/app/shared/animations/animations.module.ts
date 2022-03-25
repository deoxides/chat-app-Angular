import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BubbleComponent} from './bubble/bubble.component';
import {WaveComponent} from './wave/wave.component';



@NgModule({
  declarations:[
    BubbleComponent,
    WaveComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AnimationsModule { }
