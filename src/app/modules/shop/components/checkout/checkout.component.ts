import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductCardComponent,
    ReactiveFormsModule
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  productsInCart: Product[] = []
  checkoutForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhone: new FormControl('', [Validators.required]),
    userAddress: new FormControl('', [Validators.required]),
    paymentType: new FormControl('cash', [Validators.required]),
  })

  constructor(public cartService: CartService, private orderService: OrdersService, private router: Router) {
    this.productsInCart = this.cartService.cart?.products
  }

  addOrder() {
    this.orderService.addOrder({
      OrderId: this.randomId(),
      OrderDate: new Date(),
      UserId: `${this.randomId()}-${this.randomId()}-${this.randomId()}`,
      UserName: this.checkoutForm.controls.userName.value,
      UserEmail: this.checkoutForm.controls.userEmail.value,
      UserPhone: this.checkoutForm.controls.userPhone.value,
      UserAddress: this.checkoutForm.controls.userAddress.value,
      Products: this.productsInCart,
      PaymentType: this.checkoutForm.controls.paymentType.value,
    })
    this.cartService.cart = null;
    this.router.navigate(['/']);
  }

  randomId() {
    return Math.floor(10000 + Math.random() * 90000)
  }
}
