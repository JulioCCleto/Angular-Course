import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { map, delay, filter, tap, take, first, last, debounceTime, takeWhile, takeUntil } from 'rxjs/operators/';
import { fromEvent, interval, Observable, Subscription, timer } from 'rxjs';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @ViewChild(MatRipple) ripple: MatRipple;

  constructor() { }

  ngOnInit(): void {
  }


  mapClick() { // Utilizando o map 
    from([1, 2, 3, 4, 5])
      .pipe( //passa o resultado pro proximo SEMPRE LEMBRAR DE USAR
        map(i => "Number " + i), //mapeando o array para ficar na frente do number
        delay(1000)
      )
      .subscribe(i => console.log(i));

    fromEvent(document, 'click')
      .pipe(
        map((e: MouseEvent) => ({ x: e.screenX, y: e.screenY })) //pega as posições xy do mouse 
      )
      .subscribe((pos) => console.log(pos));
  }

  filterClick() {
    from([1, 2, 3, 4, 5])
      .pipe(
        filter(i => i % 2 == 1),
        map(i => "Número ímpar: " + i) // filtrando so os numeros impares
      )
      .subscribe(i => console.log(i));

    interval(100)
      .pipe(
        filter(i => i % 2 == 0),
        map(i => "Números par: " + i)
      )
      .subscribe(i => console.log(i));
  }

  tapClick() {
    interval(100)
      .pipe(
        tap(i => console.log('')),
        tap(i => console.warn('Before Filtering', i)),
        filter(i => i % 2 == 0),
        tap(i => console.warn('After Filtering', i)),
        map(i => "Números par: " + i),
        tap(i => console.warn('after map', i)),
      )
      .subscribe(i => console.log(i));
  }


  takeClick() {
    const observable = new Observable((observer) => {
      let i;
      for (i = 0; i < 20; i++)
        setTimeout(() => observer.next(Math.floor(Math.random() * 1000)), i * 100);
      setTimeout(() => observer.complete(), i * 100);
    });

    const s: Subscription = observable
      .pipe(
        tap(i => console.log(i)),
        //  take(10) // Depois dessa quantidade ele dará unsubscribe.
        //  first() // Pega o primeiro item
        last()
      )
      .subscribe(v => console.log('Output', v),
        (error) => console.error(error),
        () => console.log('Complete!')
      );
    const interv = setInterval(() => {
      console.log('Checking...');
      if (s.closed) {
        console.warn('Subscription fechada');
        clearInterval(interv);
      }

    }, 200);
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true, centered: true
    })
    rippleRef.fadeOut();
  }

  debounceTimeClick() {
    fromEvent(document, 'click')
      .pipe(
        tap((e) => console.log('Click')),
        debounceTime(1000)
      )
      .subscribe((e: MouseEvent) => {
        console.log("Click debouce time: ", e);
        this.launchRipple();
      });
  }

  takeWhileClick() {
    interval(500)
    .pipe( takeWhile((value, index) => (value < 5)))
    .subscribe(
      (i) => console.log('take While: ', i),
      (error) => console.error(error),
      () => console.log('Completed'));
  }

  takeUntilClick() {
    let dueTime$ = timer(5000);
    interval(500)
    .pipe( takeUntil(dueTime$))
    .subscribe(
      (i) => console.log('take While: ', i),
      (error) => console.error(error),
      () => console.log('Completed'));
  }


}

