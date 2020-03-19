import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showNome: boolean = true;
  showIdade: boolean = false;
  showTelefone: boolean = false;
  showEndereco: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
