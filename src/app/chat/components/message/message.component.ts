import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input() from: string = 'Melhsdilhalijshvñjashdipvu';
  @Input() message: string= '';
  @Input() time:string = '12-02-2021';

  constructor(){
      const date = new Date();
      this.time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

}
