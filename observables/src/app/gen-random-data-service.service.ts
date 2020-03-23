import { Injectable } from '@angular/core';
import { ConnectableObservable, Observer, Observable } from 'rxjs';
import { DataModel } from './dataModel';
import { publish } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GenRandomDataServiceService {
  public dataObservable: ConnectableObservable<DataModel>;
  constructor() {
    this.dataObservable = new Observable(
      (observer: Observer<DataModel>) => {
        let n = 0;
        console.log('Observable Criado');
        const f = () => {
          n++;
          console.log(n);
          if (n <= 10) {
            const timestamp = Math.random() * 2000 + 500;
            observer.next({ timestamp: timestamp, data: n});
            setTimeout(f, timestamp);
          }
          else {
            observer.complete();
          }
        }
        f();
      }
    ).pipe(publish()) as ConnectableObservable<DataModel>;
  }
}
