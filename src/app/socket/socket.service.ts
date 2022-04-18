import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';

import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class SocketService extends Socket {
  constructor(private auth:AuthService) {
    super({url:environment.server.url,options:{reconnectionAttempts:5,reconnectionDelay:2000}})
    this.ioSocket['auth'] = {token: this.auth.token}

  }
}
