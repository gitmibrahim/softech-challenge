import { Injectable } from '@angular/core';
import orders from '../../../../order-master-dp/orders.json';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  constructor() { }

  addOrder(order: any) {
    const orders = localStorage.getItem('orders');
    if (orders) {
      const parsedOrders = JSON.parse(orders);
      parsedOrders.push(order);
      localStorage.setItem('orders', JSON.stringify(parsedOrders));
    } else {
      localStorage.setItem('orders', JSON.stringify([order]));
    }
  }

  getOrder(id: any) {
    return orders.find(o => o.OrderId === id)
  }
}
