import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import products from '../../../../../order-master-dp/porducts.json';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productList: Product[] = products;
  
  constructor(private cartService: CartService) {
    this.productList.map((product: Product) => {
      const productInCart = this.cartService.cart.products.find((p: Product) => 
        p.ProductId === product.ProductId
      )
      if (productInCart) product.quantity = productInCart.quantity
    })
  }
}
