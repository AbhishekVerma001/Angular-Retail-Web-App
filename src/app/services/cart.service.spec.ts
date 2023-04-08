import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { CartItem } from '../common/cart-item';
import { Product } from '../common/product';

describe('CartService', () => {
  let service: CartService;
  let cartItemMock:CartItem;
  let product:Product;
  beforeEach(() => {
    
    //service = TestBed.inject(CartService);
    let serviceMock:CartService=new CartService();
    product={
      "id" : "1",
      "productId" : 3168,
      "name" : "Nike Men's Incinerate MSL White Blue Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 560,
      "imageUrl" : "assets/images/products/Men/Shoes/3168.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : new Date(),
      "lastUpdated" : null,
      "colour" : "White",
      "product_usage" : "Sports",
    };
    cartItemMock=new CartItem(product);
    serviceMock.cartItems=[cartItemMock];
    TestBed.configureTestingModule({
      providers: [{provide: CartService, useFactory: () => {
        return serviceMock}
      }]
    });
  });

  it('should test addToCart', () => {
    service=TestBed.inject(CartService);
    expect(service).toBeTruthy();
    service.addToCart(cartItemMock);
    expect(service.cartItems.find(tempCartItem => tempCartItem.id === cartItemMock.id ).quantity).toEqual(2);
    
  });
  it('should test computeCartTotals', () => {
    service=TestBed.inject(CartService);
    expect(service).toBeTruthy();
    service.addToCart(cartItemMock);
    //service.computeCartTotals();
    // subscribe to the cart totalPrice
    service.totalPrice.subscribe({
      next:data => {expect(data).toEqual(560*2);
        console.log("price=",data);
      }
  });


    // subscribe to the cart totalQuantity
    service.totalQuantity.subscribe({
      next:data => {expect(data).toEqual(2);
        console.log("quantity=",data)
        // done();
      }
  });
});
   
    it('should test decrementQuantity', () => {
      service=TestBed.inject(CartService);
      expect(service).toBeTruthy();
      service.decrementQuantity(cartItemMock);
      expect(service.cartItems.length).toEqual(0);
      
    });

    it('should test remove', () => {
      service=TestBed.inject(CartService);
      expect(service).toBeTruthy();
      service.addToCart(cartItemMock);
      expect(service.cartItems.find(tempCartItem => tempCartItem.id === cartItemMock.id ).quantity).toEqual(2);
      expect(service.cartItems.length).toEqual(1);
      service.remove(cartItemMock);
      expect(service.cartItems.length).toEqual(0);
      
    });
  
});
