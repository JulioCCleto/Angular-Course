import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';

interface User {
  login: string,
  name: string,
}

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  options$: Observable<string[]>;
  user$: Observable<User>;

  constructor() { }

  ngOnInit() {

    this.options$ = Observable.create(
      (observer) => {
        for (let i = 0; i < 10; i++) {
          observer.next(`Minha opção é: ${i}`);
        }
        observer.complete();
      }
    )
      .pipe(
        map(s => s + '!'),
        toArray(),
        delay(1000)
      );


    this.user$ = new Observable<User>((observer) => {
      let names = ["Julio", "Robert", "João", "Gustavo", "Breno"];
      let logins = ["Juliao", "Robert", "Joãozin", "Gustavao", "Breno"];
      let i = 0;

      setInterval(() => {
        if (i == 4) {
          observer.complete();
        }
        else {
          observer.next({ login: logins[i], name: names[i] });
        }
        i++;
      }, 3000)
    });
    this.user$.subscribe((s) => console.log(s));
  }

}