import { ProductService } from './../product.service';
import { Product } from './../models/product.model';
import { DepartamentoFormComponent } from './../departamento-form/departamento-form.component';
import { Component, OnInit } from '@angular/core';
import { Department } from '../models/departament.model';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {


  name: string;
  department: Department;
  price: number;
  description: string;
  departments: Department[];

  constructor(
    private productService: ProductService,
    private departmentService: DepartmentService,
    ){}

  ngOnInit() {
    this.departments = this.departmentService.getDepartments();
  }

  save() {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department,
    });
    this.clear();
  }

  clear() {
      this.name = "";
      this.price = 0 ;
      this.description = "";
      this.department = null;
  }
}
