import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import orders from '../../../../../order-master-dp/orders.json';
import { OrderCardComponent } from '../order-card/order-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [
    CommonModule,
    OrderCardComponent,
    RouterOutlet
  ],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent {
  orderList: any[] = orders;
}
