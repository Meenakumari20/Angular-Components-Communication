import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  sharedInput = '';

  constructor(private communication: CommunicationService) { }

  ngOnInit() {
    this.communication.currentMessage.subscribe(message => this.sharedInput = message);
  }

}
