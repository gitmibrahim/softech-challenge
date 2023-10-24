import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import products from '../../../../../order-master-dp/products.json';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  order: any;

  constructor(private activatedRoute: ActivatedRoute, private ordersService: OrdersService) {
    const id = this.activatedRoute.snapshot.params['id'];
    this.order = this.ordersService.getOrder(+id)
    this.order['Products'] = this.order['Products'].map((product: any) => {
      const fullProduct = products.find((p: Product) => p.ProductId === product.ProductId)
      const quantity = product.Quantity
      product = fullProduct
      product.quantity = quantity
      return product
    });
  }
  
}
