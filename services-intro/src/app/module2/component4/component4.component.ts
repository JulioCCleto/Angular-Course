import { Service1 } from './../../module2/service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  num = 0;

  constructor(private myServico1: Service1) {}

  ngOnInit(): void {
    this.num = this.myServico1.num;
  }
}


