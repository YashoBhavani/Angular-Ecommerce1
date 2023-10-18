import { Component, OnInit } from '@angular/core';
import { ProductRepresentaion } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: ProductRepresentaion[] = [];

  constructor(
    private service: ProductService
  ) {

  }
  ngOnInit(): void {
     this.service.getAllProductsWithLimit()
        .subscribe({
          next: (result) => {
            this.products = result;
          }
        })
  }

}
