import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SweetAlertOptions } from 'sweetalert2';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { Location } from '@angular/common';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email:string = '';
  public password:string = '';
  @ViewChild('swal')
  public readonly alert!:SwalComponent;

  constructor(private authService:AuthService, private router:Router,private location:Location) {}

  login():void{
    // let options:SweetAlertOptions = {
    //   title:'Wait a moment',
    //   willOpen: () => {
    //       const result =this.authService.login(this.email,this.password)
    //       .then((user) => {
    //         if(user){
    //           console.log(user)
    //           return true
    //         }else{
    //           return false
    //         }
    //       })
    //       .catch((erro) => {
    //         return false
    //       })

    //       return result;
    //     }
    //   }
    // this.alert.swalOptions = options
    // this.alert.fire()
    // .then((result) => {
    //   this.alert.dismiss
    //   if(result.value){
    //     options = {title:'Success',icon:'success',timer:3000}
    //     this.alert.swalOptions = options
    //     this.alert.fire()
    //   }else{
    //     options = {title:'Error',icon:'error',timer:3000}
    //     this.alert.swalOptions = options
    //     this.alert.fire()
    //   }
    // }).catch((error) => console.log)
    let options:SweetAlertOptions = {}
   this.authService.login(this.email,this.password)
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

  redirectAfterLogin():Function{
   return () => this.location.back();
  }
}
