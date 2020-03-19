import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = 'Fulano de Tal';
  usuario = {
    firstname: 'Julio',
    lastname: 'Cleto',
    age: 21,
    adress: 'Casa'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
