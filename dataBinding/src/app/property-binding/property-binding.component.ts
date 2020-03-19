import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  color = 'warn';
  btndisable = false;
  colors = ['primary', 'warn', 'accent'];
  idx = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx + 1) % this.colors.length;
    }, 1000);
  }
}
