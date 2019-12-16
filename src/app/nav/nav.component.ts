import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 name : String = 'Child Component';

 @Output() sendName = new EventEmitter<String>();

 OnButtonClick(){
   this.sendName.emit(this.name);
 }
  constructor() { }

  ngOnInit() {
  }

}