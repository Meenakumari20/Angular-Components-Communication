import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  sharedInput = '';

  constructor(private communication: CommunicationService) { }

  ngOnInit() {
    this.communication.currentMessage.subscribe(message => this.sharedInput = message);
  }

}
