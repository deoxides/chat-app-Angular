import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { MaterialModule } from '../material/material.module';

import { NavComponent } from './nav/nav.component';
import { ButtonLinkComponent } from './buttons/button-link/button-link.component';
import { ButtonBackComponent } from './buttons/button-back/button-button.component';

@NgModule({
  declarations:[
    NavComponent,
    ButtonLinkComponent,
    ButtonBackComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module,
    MaterialModule
  ],
  exports:[
    NavComponent,
    ButtonLinkComponent,
    ButtonBackComponent,
  ]
})
export class SharedModule { }
