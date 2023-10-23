import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import products from '../../../../../order-master-dp/porducts.json';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productList: Product[];
  
  constructor(private http: HttpClient) {
    this.productList = products
  }
}
