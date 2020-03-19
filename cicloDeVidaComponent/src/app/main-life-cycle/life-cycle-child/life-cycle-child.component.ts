import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  SimpleChanges,
  AfterViewInit
} from '@angular/core';

export class LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent
  implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {
  @Input() name: string;
  @Input() age: number;
  @Input() car: string;

  public events: LifeCycleEvent[] = [];
  nextEventId = 0;

  colors: string[] = ['accent', 'warn', 'primary'];
  constructor() {
   // this.newEvent('constructor');
  }

  ngOnInit(): void {
    console.log(this.name);
    this.newEvent('ngOnInit');
   }

  ngOnChanges(changes: SimpleChanges) {
     this.newEvent('ngOnChanges');
  }

  ngAfterContentInit() {
     this.newEvent('ngAfterContentInit');
  }

  ngAfterViewInit() {
     this.newEvent('ngAfterViewInit');
  }

  ngOnDestroy() {
     this.newEvent('ngOnDestroy');
  }

  newEvent(name: string) {
    const id = this.nextEventId++;
    this.events.push({id: id, color: this.colors[id % this.colors.length],
    name: name});
    setTimeout(()=> {
      let idx = this.events.findIndex((e) => e.id == id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length * 2000);
  }
}
