import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../shop/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cart!: any;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe((cart: any) => {
      this.cart = cart;
    });
  }
}
