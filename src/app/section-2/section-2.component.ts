import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-2',
  templateUrl: './section-2.component.html',
  styleUrls: ['./section-2.component.css']
})
export class Section2Component implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Server 1';
  serverCreated = false;
  servers = ['testserver', 'testserver 2', 'testserver 3'];
  constructor() { }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
