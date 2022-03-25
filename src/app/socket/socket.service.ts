import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { environment } from 'src/environments/environment';
import { Observable, EMPTY } from 'rxjs';

@Injectable()
export class SocketService extends Socket {
  constructor() {
    super({url:environment.socket.url})

  }
}
