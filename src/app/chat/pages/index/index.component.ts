import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements AfterViewInit {
  public name: string = '';

  @ViewChild('swal')
  public readonly resultSwal!: SwalComponent;

  constructor(private chatService: ChatService,private router:Router) {}

  ngAfterViewInit(): void {
    if(this.chatService.connectError()){
      const options:SweetAlertOptions = {title:`Error`, text:'Server response with Error connection',icon:'error'};
      this.resultSwal.swalOptions = options;
      this.resultSwal.fire()
    }
}
 

  searchRoom() {
    let options: SweetAlertOptions = {};
    this.chatService.searchRoom(this.name).then((result) => {
      if (result) {
        options = {title:`Room ${this.name} founded`, text:'Do you want to join?',icon:'success', showCancelButton:true}
        this.resultSwal.swalOptions = options;
        this.resultSwal.fire()
        .then((swalResult) => {
          if(swalResult.isConfirmed){
            this.router.navigate([`rooms/room/${this.name}`])
          }
        });
      }else{
        options = {title:`Room ${this.name} not founded`, text:'Do you want to create it?',icon:'info', showCancelButton:true}
        this.resultSwal.swalOptions = options;
        this.resultSwal.fire()
        .then((swalResult => {
          if(swalResult.isConfirmed){
            this.chatService.createRoom(this.name)
            .then((result) => {
              if(result){
                this.router.navigate(['rooms/room'])
              }
            })
          }
        }))
      }
    })
    .catch((err) => {
      options = {title:'Error', text:'Some error happened'}
      this.resultSwal.swalOptions = options;
      this.resultSwal.fire();
    });
  }
}
