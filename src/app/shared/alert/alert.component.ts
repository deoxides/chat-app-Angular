import { Component, Input, Optional, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';
import { SweetAlertOptions } from 'sweetalert2';
import {
  SwalComponent,
  SweetAlert2LoaderService,
} from '@sweetalert2/ngx-sweetalert2';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit{
  @Input() options: SweetAlertOptions = {};
  @Input() function?: Promise<any> | undefined = undefined ;
  @Optional() pending: boolean = false;

  @ViewChild('alert')
  public readonly swal!: SwalComponent;

  constructor(){
    this.preConfirm = this.preConfirm.bind(this)
    this.setAlert = this.setAlert.bind(this);
  }

  ngOnInit(): void {
    console.log(this.swal.swalOptions)
    this.setAlert();
  }

  setAlert(){
    let options = this.options
    if(this.function){
      options.showLoaderOnConfirm = true
    }
    return options
  }

  preConfirm(){
    return this.function
  }

  openAlert(){
    this.swal.swalOptions = this.options;
    this.swal.fire()
    console.log('alert',this.swal.swalOptions)
  }
}
