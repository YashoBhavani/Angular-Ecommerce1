import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRepresentaion } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = 'https://fakestoreapi.com/';

  constructor(
    private http: HttpClient
  ) {  
  }

  getAllProductsWithLimit(limit = 5){
    const productsUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentaion>>(productsUrl);
  }

   createProduct(product: ProductRepresentaion){
    const productsUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentaion>(productsUrl,product);
   }
}
