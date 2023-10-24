import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./modules/shop/components/product-list/product-list.component').then(
        (c) => c.ProductListComponent
      )
  },
  {
    path: 'checkout',
    loadComponent: () => 
      import('./modules/shop/components/checkout/checkout.component').then(
        (c) => c.CheckoutComponent
      )
  },
  {
    path: 'orders',
    loadComponent: () => 
      import('./modules/shop/components/orders-page/orders-page.component').then(
        (c) => c.OrdersPageComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () => 
          import('./modules/shop/components/orders-list/orders-list.component').then(
            (c) => c.OrdersListComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () => 
          import('./modules/shop/components/order/order.component').then(
            (c) => c.OrderComponent
          ),
      }
    ]
  },
];
