import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { CartServiceMock, ProductMock } from '../../utilities/test-mocks';
import { By } from '@angular/platform-browser';
import { CartService } from '../../services/cart.service';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      providers: [
        { provide: CartService, useValue: CartServiceMock }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have product input', () => {
    component.product = ProductMock
    expect(component.product.ProductId).toEqual(ProductMock.ProductId)
  });

  it('should have add to cart button', () => {
    const addToCartBtn = fixture.nativeElement.query(By.css('button.add-to-cart'))
    expect(addToCartBtn).toBeTruthy()
  });

  it('should add product to cart', async () => {
    spyOn(component, 'addProductToCart')

    const addToCartBtn = fixture.nativeElement.query(By.css('button.add-to-cart'))
    addToCartBtn.click(ProductMock)

    await fixture.whenStable()
    
    expect(component.addProductToCart).toHaveBeenCalledOnceWith();
    expect(CartServiceMock.addProductToCart).toHaveBeenCalledOnceWith(ProductMock)
  });

  it('should edit product quantity', async () => {
    spyOn(component, 'editProductQuantity')
    expect(component.quantity).toEqual(0)

    const addToCartBtn = fixture.nativeElement.query(By.css('button.add-to-cart'))
    addToCartBtn.click(ProductMock)
    await fixture.whenStable()
    expect(component.quantity).toEqual(1)

    const plusBtn = fixture.nativeElement.query(By.css('button.plus'))
    plusBtn.click(ProductMock)
    await fixture.whenStable()

    expect(component.editProductQuantity).toHaveBeenCalledOnceWith('add');
    expect(CartServiceMock.editProductQuantity).toHaveBeenCalledOnceWith('add')
  });
});
