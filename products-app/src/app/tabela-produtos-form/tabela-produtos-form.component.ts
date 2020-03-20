import { ProductService } from './../product.service';
import { Product } from './../models/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tabela-produtos-form',
  templateUrl: './tabela-produtos-form.component.html',
  styleUrls: ['./tabela-produtos-form.component.css']
})
export class TabelaProdutosFormComponent implements OnInit {


  @ViewChild(MatTable) datatable: MatTable<any>;

  prodColumns: string[] = ['id', 'name', 'price', 'description', 'department'];
  products: Product[];

  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.onNewProduct.subscribe((p) => {
      this.datatable.renderRows();
    });
  }

}
