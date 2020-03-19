import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  userName = '';
  userPassword = '';

  client = {
    firstName: 'Júlio',
    lastName: 'Cleto',
    age: '21',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
