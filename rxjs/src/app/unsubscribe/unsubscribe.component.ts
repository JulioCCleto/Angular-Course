import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  subscriptionsAreActive = false;
  subscriptions: Subscription[] = [];
  unsubscribeall$: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
    this.checkSubscriptions();
  }

  checkSubscriptions() {
    interval(100).subscribe(() => {
      let active = false;
      this.subscriptions.forEach((s) => {
        if (!s.closed)
          active = true;
      })
      this.subscriptionsAreActive = active;
    })
  }

  subscribe() {
    const subscriptions1 = interval(100)
      .pipe(takeUntil(this.unsubscribeall$))
      .subscribe((i) => { console.log(i); });
    const subscriptions2 = fromEvent(document, 'mousemove')
      .pipe(takeUntil(this.unsubscribeall$))
      .subscribe((e) => console.log(e));
    this.subscriptions.push(subscriptions1);
    this.subscriptions.push(subscriptions2);
  }

  unsubscribe() {
    this.unsubscribeall$.next();
  }
}
