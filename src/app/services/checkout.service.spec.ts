import { TestBed } from '@angular/core/testing';

import { CheckoutService } from './checkout.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Purchase } from '../common/purchase';

describe('CheckoutService', () => {
  let service: CheckoutService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CheckoutService);
  });
  afterEach(() => {
    httpMock.verify();
});

  it('should test placeOrder', (done) => {
   httpMock=TestBed.inject(HttpTestingController);
    expect(service).toBeTruthy();
    const url = 'http://localhost:8080/checkout/purchase';
    const purchase:Purchase={
      "customer":{
         "firstName":"afasa",
         "lastName":"afasa",
         "email":"afasa@test.com"
      },
      "shippingAddress":{
         "street":"afasa",
         "city":"afasa",
         "state":"Alberta",
         "country":"Canada",
         "zipCode":"afasa"
      },
      "billingAddress":{
         "street":"fsfsf",
         "city":"sfdsf",
         "state":"Acre",
         "country":"Brazil",
         "zipCode":"19111"
      },
      "order":{
         "totalPrice":36.98,
         "totalQuantity":2
      },
      "orderItems":[
         {
            "imageUrl":"assets/images/products/coffeemugs/coffeemug-luv2code-1000.png",
            "quantity":1,
            "unitPrice":18.99,
            "productId":"26"
         },
         {
            "imageUrl":"assets/images/products/mousepads/mousepad-luv2code-1000.png",
            "quantity":1,
            "unitPrice":17.99,
            "productId":"51"
         }
      ]
   }
   ;
    const res={
      "orderTrackingNumber": "c3358974-2787-49e6-a7c0-d31a6fd8f18a"
  }
    service.placeOrder(purchase).subscribe({
      next:data => {
        expect(data).toEqual(res);
        
        done();
      }
      });
 
    const req = httpMock.expectOne(url);
        expect(req.request.method).toBe('POST');
        //expect(req.request.url).toBe(url);
        req.flush(res);
  });
});
