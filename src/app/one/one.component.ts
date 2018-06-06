import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private communication: CommunicationService) { }

  ngOnInit() {
  }

  sendInput(input) {
    this.communication.setInput(input);
  }

}
