import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  showMessage:string="test event emitter";
  message:string="test event emitter";
  constructor() { }
  @Output() child:EventEmitter<string>=new EventEmitter<string>();
  ngOnInit(): void {
  }
  onEventEmitter(message:string):void{
this.showMessage=message;
  }
 
}
