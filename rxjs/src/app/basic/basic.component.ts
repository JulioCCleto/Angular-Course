import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Observer, from, of, interval, timer, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  subscription: Subscription = new Subscription();


  constructor() { }

  ngOnInit(): void {
  }

  observableCreate() { //observable normal
    const ola = Observable.create((observer: Observer<string>) => {
        observer.next("Hello");
        observer.next("from");
        observer.next("Observable");
        observer.complete();
    });
    ola.subscribe(val => console.log(val));
  }

  fromClick() { //exibe uma linha do array por vez
    from([1,2,3,4,5]).subscribe((v) => console.log(v));
  }

  fromEventClick() { //Atrela um evento ao documento/componente/html 
    const subscription = fromEvent(document, 'click').subscribe((e) => console.log(e)); // esse codigo aqui captura todos os clicks do usuario na tela.
    this.subscription.add(subscription);
  }

  ofClick() {
    of([1,2,3,4,5]).subscribe((v) => console.log(v)); //exibe o objeto completo
  }

  intervalClick() {
    const source = interval(1000);
    const subscription = source.subscribe((v) => console.log(v));
    this.subscription.add(subscription);
    //source.subscribe((v) => console.log(v)); // cria direto e sem parar a menos que dê subscription
  }

  timerClick() {
   // const source = timer(1000); // Aqui conta somente 1s e para. 
    const source = timer(3000, 1000); // neste daqui a partir de 3s ele começa a contabilizar de 1 em 1 segundo.
   // source.subscribe((v) => console.log(v)); // -> Mostra o resultado
    const subscription = source.subscribe((v) => console.log(v));
    this.subscription.add(subscription);
  }

  unsubscribeClick() { //serve para dar unsubscription de todos os subscripitons
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }
}
