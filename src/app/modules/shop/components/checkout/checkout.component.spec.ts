import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { CartService } from '../../services/cart.service';
import { CartServiceMock, OrdersServiceMock } from '../../utilities/test-mocks';
import { By } from '@angular/platform-browser';
import { OrdersService } from '../../services/orders.service';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutComponent],
      providers: [
        { provide: CartService, useValue: CartServiceMock },
        { provide: OrdersService, useValue: OrdersServiceMock }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cart on init', () => {
    expect(component.productsInCart).toBeDefined();
  });

  it('should get cart on init', async () => {
    const addOrdertBtn = fixture.nativeElement.query(By.css('input.add-order'))
    addOrdertBtn.click()
    await fixture.whenStable()
    expect(OrdersServiceMock.addOrder).toHaveBeenCalled()
  });
});
