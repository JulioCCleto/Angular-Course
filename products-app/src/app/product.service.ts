import { DepartmentService } from './department.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    {id: 1, name: 'RTX2080', department_id: 4, price: 3000, description: 'Placa de vídeo'},
    {id: 2, name: 'RTX2070', department_id: 1, price: 2000, description: 'Placa de vídeo'},
    {id: 3, name: 'RTX2060', department_id: 1, price: 1500, description: 'Placa de vídeo'},
    {id: 4, name: 'GTX1660', department_id: 3, price: 1000, description: 'Placa de vídeo'},
  ];

  private products: Product[] = [];
  private nextId: number;
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService: DepartmentService) {
    for (const p of this.dataFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)
      });
      this.nextId = p.id + 1;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    const prod: Product = {id: this.nextId++, ...p};
    this.products.push(prod);
    console.log(this.products);
    this.onNewProduct.emit(prod);
  }
}
