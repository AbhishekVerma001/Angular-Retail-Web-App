import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasicAuthService } from './http-intercepter-basic-auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductService } from './product.service';

describe('HttpIntercepterBasicAuthService', () => {
  let service: HttpIntercepterBasicAuthService;
  let httpMock: HttpTestingController;
  let productService:ProductService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
    providers:[{
      provide:HTTP_INTERCEPTORS,
      useClass:HttpIntercepterBasicAuthService,
      multi:true
    }] });
    service = TestBed.inject(HttpIntercepterBasicAuthService);
    productService=TestBed.inject(ProductService);
  });
  afterEach(() => {
    
});

  it('should be created', (done) => {
    httpMock=TestBed.inject(HttpTestingController);
    expect(service).toBeTruthy();
    const products ={
      "id" : 1,
      "product_id" : 3168,
      "name" : "Nike Men's Incinerate MSL White Blue Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 560,
      "imageUrl" : "assets/images/products/Men/Shoes/3168.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2023-03-19",
      "lastUpdated" : null,
      "colour" : "White",
      "productUsage" : "Sports",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8081/products/1"
        },
        "product" : {
          "href" : "http://localhost:8081/products/1"
        },
        "category" : {
          "href" : "http://localhost:8081/products/1/category"
        }
      }
    }
    const url='http://localhost:8080/products/1';
    productService.getProduct(1).subscribe({
      next:data => {
        expect(data).toEqual(products);
        
        done();
      }
    })
    const req = httpMock.expectOne(url);
  expect(req.request.method).toBe('GET');
  
  // httpMock.verify();
  expect(req.request.headers.has('Custom-Header')).toEqual(true);
  expect(req.request.headers.get('Custom-Header')).toEqual('Custom-Value');
  req.flush(products);
  });
});
