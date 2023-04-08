import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsComponent } from './cart-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';

describe('CartDetailsComponent', () => {
  let component: CartDetailsComponent;
  let fixture: ComponentFixture<CartDetailsComponent>;
  let serviceMock:CartService=new CartService();
  let price:number=3000;
  let quantity:number=3000;
  class MockService{
    public getTotalPrice(): Observable<any>{
      return of(price);
    }
    public getTotalQuantity(): Observable<any>{
      return of(price);
    }
  }
  beforeEach(async () => {
    // serviceMock={
    //   listCartDetails:jest.fn()
    // }
    let product:Product={
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
    let cartItemMock=new CartItem(product);
    serviceMock.cartItems=[cartItemMock];
    await TestBed.configureTestingModule({
      declarations: [ CartDetailsComponent ],
      imports: [HttpClientTestingModule  ],
      providers:[//{
        //provide : 
        CartService//,useClass:MockService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetailsComponent);
    component = fixture.componentInstance;
    //serviceMock=TestBed.inject(CartService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test listCartDetails', () => {
    expect(component).toBeTruthy();
    const product:Product={
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
    const cartItemMock:CartItem=new CartItem(product);

    fixture.detectChanges();
    //jest.spyOn(serviceMock,'totalPrice').mockReturnValue(new BehaviorSubject<number>(price));
    //jest.spyOn(serviceMock,'totalQuantity').mockReturnValue(new BehaviorSubject<number>(quantity));
    serviceMock.totalPrice.subscribe({
      next:data => {expect(data).toEqual(560*2);
        console.log("price=",data);
      }
  });


    // subscribe to the cart totalQuantity
    serviceMock.totalQuantity.subscribe({
      next:data => {expect(data).toEqual(2);
        console.log("quantity=",data)
        
      }
  });
    component.getTotalQuantity();
    component.getTotalPrice();
     //expect(serviceMock.totalPrice.next).toHaveBeenCalled();
    //expect(serviceMock.getProductCategories).toHaveBeenCalled();
    
    //component.listProductCategories();
    
    //expect(serviceMock.totalQuantity.next).toHaveBeenCalled();
    //expect(component.productCategories).toBe(Category);
  });


});
