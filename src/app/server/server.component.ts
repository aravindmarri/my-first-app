import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online{color: white;}`]
})


export class ServerComponent{
  serverId;
  serverStatus = 'Offline';

  getServerStatus(): string {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    return this.serverStatus;
  }
  getServerId(): number {
    this.serverId = Math.floor(Math.random() * 100);
    return this.serverId;
  }
  getColor = () => this.serverStatus === 'Online' ? 'green' : 'red';

}
