import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    'Ana',
    'Gustavo',
    'Robert',
    'Eduardo',
  ];

  disease = [
    {name: 'Corona Vírus', apelido: 'Coroninha', cientifico: 'Covid-19'},
    {name: 'Influenza A', apelido: 'Gripe Suína', cientifico: 'H1N1'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
