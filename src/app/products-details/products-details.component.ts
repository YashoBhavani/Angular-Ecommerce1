import { Component, Input } from '@angular/core';
import { ProductRepresentaion } from "../services/api/models/product-representation";

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  
  @Input()
  product: ProductRepresentaion = {};

}
