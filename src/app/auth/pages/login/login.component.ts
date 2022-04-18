import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';

import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('swal')
  public readonly alert!:SwalComponent;

  constructor(
    private authService:AuthService,
    private location:Location) {}

  login(form:NgForm):void{
    const {email,password} = form.controls;
    let options:SweetAlertOptions = {}
   this.authService.login(email.value,password.value)
   .then((token) => {
     if(!token){
       options = {title:'Error', text:'Wrong email/password', icon:'error'}
       this.alert.swalOptions = options;
       this.alert.fire()
     }else{
       options = {title:'success',text:'Redirecting...',icon:'success',showConfirmButton:false,timer:2000,timerProgressBar:true}
       this.alert.swalOptions = options
       this.alert.fire()
       .then(() => {
         this.location.back()
       })
     }
   })
   .catch((err) => {
    const options:SweetAlertOptions = {title:'Error', text:err, icon:'error'}
    this.alert.swalOptions = options;
    this.alert.fire()
   });
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle()
    .then((token) => {
      this.location.back()
    })
    .catch((err) => {
      const options:SweetAlertOptions = {title:'Error', text:err, icon:'error'}
      this.alert.swalOptions = options;
      this.alert.fire()
    });
  }
}
