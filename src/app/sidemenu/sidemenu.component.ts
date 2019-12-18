import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
title : String;

@Output() sendNameFromSideMenu = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendName(event: string) {
    this.sendNameFromSideMenu.emit(event);
  }
}