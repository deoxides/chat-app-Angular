//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
//Custom Modules
import  {AnimationsModule } from './animations/animations.module';
//Components
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ButtonLinkComponent } from './buttons/button-link/button-link.component';
import { ButtonBackComponent } from './buttons/button-back/button-button.component';
import { AlertComponent } from './alert/alert.component';
import { ErrorPageComponent } from './error-page/error-page.component';
@NgModule({
  declarations:[
    NavComponent,
    ButtonLinkComponent,
    ButtonBackComponent,
    AlertComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module
  ],
  exports:[
    NavComponent,
    ButtonLinkComponent,
    ButtonBackComponent,
    AlertComponent
  ]
})
export class SharedModule { }
