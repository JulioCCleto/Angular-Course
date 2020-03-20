import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit {
  depName: string;

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {}

  save() {
    this.departmentService.addDepartment({
      name: this.depName
    });
    this.clear();
  }

  clear() {
    this.depName = '';
  }
}
