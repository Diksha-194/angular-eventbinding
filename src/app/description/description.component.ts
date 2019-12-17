import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  title : string;

  constructor() { }

  ngOnInit() {
  }
  getName(event){
    this.title=event;
  }
}