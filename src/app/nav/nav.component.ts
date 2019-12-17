import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 name : string = 'From Nav Component';

 @Output() sendName = new EventEmitter<string>();

 OnButtonClick(){
   this.sendName.emit(this.name);
 }
  constructor() { }

  ngOnInit() {
  }

}