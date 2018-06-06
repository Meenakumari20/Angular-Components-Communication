import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ptoc-child',
  templateUrl: './ptoc-child.component.html',
  styleUrls: ['./ptoc-child.component.css']
})
export class PtocChildComponent implements OnInit {

  @Input() parentInput = '';

  constructor() { }

  ngOnInit() {
  }

}
