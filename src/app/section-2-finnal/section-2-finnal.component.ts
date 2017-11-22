import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-2-finnal',
  templateUrl: './section-2-finnal.component.html',
  styleUrls: ['./section-2-finnal.component.css']
})
export class Section2FinnalComponent{
  showCode = false;
  log =[];

  constructor() { }

  onDetails(){
    this.showCode = !this.showCode;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
