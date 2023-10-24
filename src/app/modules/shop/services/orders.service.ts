import { Injectable } from '@angular/core';
import { OrderDetails } from '../interfaces/order-details';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  addOrder(order: OrderDetails) {
    const orders = localStorage.getItem('orders');
    if (orders) {
      const parsedOrders = JSON.parse(orders);
      parsedOrders.push(order);
      localStorage.setItem('orders', JSON.stringify(parsedOrders));
    } else {
      localStorage.setItem('orders', JSON.stringify([order]));
    }
  }
}
