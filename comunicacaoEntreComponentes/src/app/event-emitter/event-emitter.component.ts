import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {

  title = 'Cálculo';
  value: number = 0;

  constructor() { }

  incBy(event) {
    this.value += event;
  }
  ngOnInit(): void {
  }

}
