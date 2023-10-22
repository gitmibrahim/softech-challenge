export const ProductMock = {
  ProductId: 123,
  ProductName: "Product 1",
  ProductPrice: 123.5,
  AvailablePieces: 25,
  ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
}

export const OrderMock = {
  OrderId: 1235,
  OrderDate: "Wed Sep 18 2019 12:45:37 GMT+0200(Eastern European Standard Time)",
  UserId: "9843-2345-2345",
  Products: [
    { ProductId: 123, Quantity: 1 },
    { ProductId: 131, Quantity: 1 }
  ],
  PaymentType: "Cash"
}

export const UserMock = {
  Id: "9843-2345-2345",
  Name: "Abd El-Rahman Ahmed Abd El-Aleem",
  Email: "AbdoAhmed@hotmail.com",
  Phone: "01125452545",
  Address: "25 Street 214, Maadi as Sarayat Al Gharbeyah, Maadi, Cairo Governorate",
  RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
}

export const CartServiceMock = {
  addProductToCart: jasmine.createSpy('addProductToCart').and.returnValue({ status: 'success' }),
  removeProductFromCart: jasmine.createSpy('removeProductFromCart').and.returnValue({ status: 'success' }),
  editProductQuantity: jasmine.createSpy('editProductQuantity').and.returnValue({ status: 'success' }),
  getCart: jasmine.createSpy('getCart').and.returnValue({ status: 'success' })
}

export const OrdersServiceMock = {
  getAllOrders: jasmine.createSpy('getAllOrders').and.returnValue([OrderMock]),
  getOrder: jasmine.createSpy('getOrder').and.returnValue(OrderMock),
  addOrder: jasmine.createSpy('addOrder').and.returnValue({ status: 'success' })
}

export const ProductsServiceMock = {
  getAllProducts: jasmine.createSpy('getAllProducts').and.returnValue([ProductMock]),
  getProduct: jasmine.createSpy('getProduct').and.returnValue(ProductMock)
}
