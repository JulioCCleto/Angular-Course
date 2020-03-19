import { TimerComponent } from './timer/timer.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild(TimerComponent)
  private myTimer: TimerComponent;

  constructor() {}

  ngOnInit(): void {}

  start() {
    this.myTimer.start();
  }

  stop() {
  this.myTimer.stop();
  }

  clear() {
    this.myTimer.clear();
  }

}
