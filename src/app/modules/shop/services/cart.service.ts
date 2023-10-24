import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart = null;
  cart$: BehaviorSubject<any> = new BehaviorSubject(this.cart)

  constructor() { }

  get cart() {
    if (this._cart) return this._cart;

    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    this._cart = cart.products ? cart : null
    return cart.products ? cart : null
  }

  set cart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addProduct(product: Product) {
    const cart = this.cart ? this.cart : {
      products: []
    }

    const p = cart.products.find((p: Product) => p.ProductId === product.ProductId)
    if (p) {
      p.quantity += 1
    } else {
      cart.products.push(product);
    }
    this.cart = cart;
  }

  editProductQuantityInCart(product: Product) {
    const cart = this.cart
    const productInCart = cart.products.find((p: Product) => p.ProductId === product.ProductId)
    productInCart.quantity = product.quantity
    this.cart = cart;
  }
  
  removeProductFromCart(product: Product) {
    const cart = this.cart
    cart.products.splice(cart.products.findIndex((p: Product) => p.ProductId === product.ProductId), 1);
    this.cart = cart;
  }
}
