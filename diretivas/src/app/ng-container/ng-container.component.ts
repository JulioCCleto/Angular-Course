import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  users = [
    { login: 'Julio 1º', role: 'admin', lastlogin: new Date('18/03/1998') },
    { login: 'Julio 2º', role: 'user', lastlogin: new Date('17/03/2006') },
    { login: 'Julio 3º', role: 'user', lastlogin: new Date('16/03/2015') },
    { login: 'Julio 4º', role: 'admin', lastlogin: new Date('15/03/2020') },
  ];
  constructor() { }

  delete(i: number) {
    this.users.splice(i);
  }
  ngOnInit(): void {
  }

}
