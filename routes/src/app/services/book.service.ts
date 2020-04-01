import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable, fromEventPattern } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([])
  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(2000)
    .subscribe(() => this.bookSubject$.next([
        {title: "Livro 1", pages: 200, authors: ["Autor1","Autor2"]},
        {title: "Livro 2", pages: 150, authors: ["Autor3"]},
        {title: "Livro 3", pages: 159, authors: ["Autor4"]},
        {title: "Livro 4", pages: 180, authors: ["Autor5","Autor6","Autor7"]},
        {title: "Livro 5", pages: 700, authors: ["Autor8"]},
      ]));
   }

   add(b: Book) {
   this.bookSubject$.getValue().push(b);
   }

   remove(i: number) {
    let books = this.bookSubject$.getValue();
    if (i>=0 && i < books.length)
    books.splice(i,1);
   }

   get(i: number): Observable<Book> {
     return this.books$.pipe(
       map(books => (i>=0 && i < books.length) ? books[i] : null),
       delay(1000)
     )

   }
}
