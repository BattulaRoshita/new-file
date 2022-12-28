import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor() { }
  @Input() childMessage: string | undefined;
  @Output() event:EventEmitter<string>=new EventEmitter<string>();
  ngOnInit(): void {
  }
onClick():void{
  this.event.emit("Message from Roshi");
}
click():void{
  this.event.emit(this.childMessage);
}
}
