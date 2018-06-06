import { Component, ViewChild } from '@angular/core';
import { CtopChildComponent } from './ctop-child/ctop-child.component';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent {

  @ViewChild(CtopChildComponent) child;

  constructor() { }

  childInput = '';

  receiveMessage($event) {
    this.childInput = $event;
  }

}
