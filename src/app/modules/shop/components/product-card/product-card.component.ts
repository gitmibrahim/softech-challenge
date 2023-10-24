import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product
  quantity!: number

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.quantity = this.product.quantity || 0;
  }

  addProductToCart() {
    if ((this.product.quantity && this.product.quantity > 0) || this.product.quantity === this.product.AvailablePieces) return
    this.product.quantity = this.quantity = 1
    this.cartService.addProduct(this.product)
  }

  editProductQuantityInCart(operation: 'add' | 'subtract' | 'change') {
    if (operation === 'add') {
      if (this.product.quantity === this.product.AvailablePieces) return
      this.quantity += 1
      this.product.quantity = this.product.quantity ? this.product.quantity + 1 : 1
      this.cartService.editProductQuantityInCart(this.product)
    } 
    else if (operation === 'subtract') {
      this.quantity -= 1
      const quantity = --this.product.quantity!
      if (quantity > 0) this.cartService.editProductQuantityInCart(this.product)
      else this.cartService.removeProductFromCart(this.product)
    } 
    else if (operation === 'change') {
      if (this.product.quantity === this.product.AvailablePieces) {
        this.quantity = this.product.quantity
        return
      }

      this.product.quantity = this.quantity
      if (this.quantity > 0) this.cartService.editProductQuantityInCart(this.product)
      else this.cartService.removeProductFromCart(this.product)
    }
  }
}
