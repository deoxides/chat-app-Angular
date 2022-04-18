import { Component, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent{

  public roomName:string = '';

  @ViewChild('swal')
  public readonly resultSwal!: SwalComponent;

  constructor(
    private chatService: ChatService,
    private router:Router) {}

  ngAfterViewInit(): void {
    this.chatService.connectError().subscribe((res) => {
      if(res){
        const options:SweetAlertOptions = {title:`Error`, text:'Server response with Error connection',icon:'error'};
        this.resultSwal.swalOptions = options;
        this.resultSwal.fire()
      }
    })
}

  searchRoom() {
    if(this.roomName.length < 1){
      return;
    }
    let options: SweetAlertOptions = {};
    const name = this.roomName
    this.chatService.searchRoom(name).then((result) => {
      if (result) {
        options = {title:`Room ${name} founded`, text:'Do you want to join?',icon:'success', showCancelButton:true}
        this.resultSwal.swalOptions = options;
        this.resultSwal.fire()
        .then((swalResult) => {
          if(swalResult.isConfirmed){
            this.router.navigate([`rooms/room/${name}`])
          }
        });
      }else{
        options = {title:`Room ${name} not founded`, text:'Do you want to create it?',icon:'info', showCancelButton:true,showLoaderOnConfirm:true,preConfirm:() => this.chatService.createRoom(name)}
        this.resultSwal.swalOptions = options;
        this.resultSwal.fire()
        .then((swalResult => {
          if(swalResult.isConfirmed){
              this.router.navigate([`rooms/room/${name}`]);
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
