import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  btnNome = 'Alterar';
  determinate = 'determinate';
  segundodeterminate = 'determinate';
  btnEnable = true;
  configEnable = false;
  i = 0;
  constructor() { }

  habilitar() {
    this.btnEnable = true;
  }

  increment() {
    this.i++;
    this.btnNome = 'Foi clicado ' + this.i + ' vezes.';
  }

  verSpinner() {
    this.determinate = 'indeterminate';
  }

  disable() {
    this.btnEnable = false;
  }

  // Check box
  cbChange(event) {
    this.configEnable = event.checked;
  }

  selectionChange(event) {
    console.log(event);
    switch (event.value) {
      case '1':
      this.segundodeterminate = 'indeterminate';
      break;
      case '2' :
      this.segundodeterminate = 'determinate';
      break;
    }
  }

  ngOnInit(): void {
  }

}
