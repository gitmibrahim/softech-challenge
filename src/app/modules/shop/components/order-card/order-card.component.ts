import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    RouterLink
  ],
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  @Input() order!: Record<string, any>;
}
