import { Component, OnInit } from '@angular/core';
import { Service1 } from 'src/app/module2/service1.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  num = 0;

  constructor(private myServico1: Service1) {}

  ngOnInit(): void {
    this.num = this.myServico1.num;
  }
}
