import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ctop-child',
  templateUrl: './ctop-child.component.html',
  styleUrls: ['./ctop-child.component.css']
})
export class CtopChildComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMessage(message) {
    this.messageEvent.emit(message);
  }

}
