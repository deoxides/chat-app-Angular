import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthService } from './services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    SweetAlert2Module.forRoot(),
    MaterialModule,
    SharedModule
  ],
  providers:[
    AuthService
  ],
  exports:[
    LoginComponent,
    SignInComponent
  ]
})
export class AuthModule { }
