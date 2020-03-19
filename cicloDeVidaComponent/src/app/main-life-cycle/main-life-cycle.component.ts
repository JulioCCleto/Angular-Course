import { Component, OnInit } from '@angular/core';
import { Client } from '../client.interface';

@Component({
  selector: 'app-main-life-cycle',
  templateUrl: './main-life-cycle.component.html',
  styleUrls: ['./main-life-cycle.component.css']
})
export class MainLifeCycleComponent implements OnInit {
  name: string;
  age: number;
  car: string;

  clients: Client[] = [];
  cars: string[] = ['Polo', 'Gol', 'Prisma', 'Uno'];
  editClient = -1;

  randomNumber: number;

  constructor() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    this.randomNumber = Math.round(Math.random() * 1000);
  }

  save() {
    if (this.editClient == -1) {
      this.clients.push({ name: this.name, age: this.age, car: this.car });
    } else {
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].car = this.car;
      this.editClient = -1;
    }

    this.name = '';
    this.age = null;
    this.car = '';
  }

  remove(i: number) {
    this.clients.splice(i, 1);
  }

  edit(i: number) {
    this.name = this.clients[i].name;
    this.age = this.clients[i].age;
    this.car = this.clients[i].car;
    this.editClient = i;
  }

  ngOnInit(): void {}
}
