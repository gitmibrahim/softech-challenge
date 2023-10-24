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
];
