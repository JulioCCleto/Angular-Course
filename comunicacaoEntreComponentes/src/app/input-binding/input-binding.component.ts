import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  @Input() name: string;
  @Input() lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {
        id: 1,
        name: 'Julio',
        age: 21
      },
      {
        id: 2,
        name: 'Teste',
        age: 21
      },
      {
        id: 3,
        name: 'Senhor Teste',
        age: 21
      },
      {
        id: 4,
        name: 'Teste Maximo',
        age: 21
      }
    ];
  }

  ngOnInit(): void {}
}
