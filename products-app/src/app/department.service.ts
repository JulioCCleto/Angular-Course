import { Injectable } from '@angular/core';
import { Department } from './models/departament.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {id: 1, name: 'Jogos'},
    {id: 2, name: 'Séries'},
    {id: 3, name: 'Animes'},
    {id: 4, name: 'PC'},
  ];

  private nextId = 5;

  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  addDepartment(departamento: Department) {
    this.departments.push({id: this.nextId++, ...departamento  });
    console.log(this.departments);
  }

  getDepartmentById(id: number): Department {
    return this.departments.find((departamento) => departamento.id == id);
  }

}
