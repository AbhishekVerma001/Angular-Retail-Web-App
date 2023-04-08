import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogComponent } from './product-catalog.component';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductCatalogComponent', () => {
  let component: ProductCatalogComponent;
  let fixture: ComponentFixture<ProductCatalogComponent>;
  let serviceMock:any;
  let products= [
    {
        "id": 26,
        "product_id": 12967,
        "name": "ADIDAS Men Spry M Black Sandals",
        "gender": "Men",
        "description": "Sandals",
        "unitPrice": 950,
        "imageUrl": "assets/images/products/Men/Sandal/12967.jpg",
        "active": true,
        "unitsInStock": 100,
        "dateCreated": "2023-03-19",
        "lastUpdated": null,
        "colour": "Black",
        "productUsage": "Casual",
        "_links": {
            "self": {
                "href": "http://192.168.1.107:8081/products/26"
            },
            "product": {
                "href": "http://192.168.1.107:8081/products/26"
            },
            "category": {
                "href": "http://192.168.1.107:8081/products/26/category"
            }
        }
    },
    {
        "id": 28,
        "product_id": 5608,
        "name": "ADIDAS Men Kendall Black Navy Floater",
        "gender": "Men",
        "description": "Sandals",
        "unitPrice": 3480,
        "imageUrl": "assets/images/products/Men/Sandal/5608.jpg",
        "active": true,
        "unitsInStock": 100,
        "dateCreated": "2023-03-19",
        "lastUpdated": null,
        "colour": "Black",
        "productUsage": "Casual",
        "_links": {
            "self": {
                "href": "http://192.168.1.107:8081/products/28"
            },
            "product": {
                "href": "http://192.168.1.107:8081/products/28"
            },
            "category": {
                "href": "http://192.168.1.107:8081/products/28/category"
            }
        }
    }
  ]
  class MockService{
    public searchProducts(searchString:string): Observable<any>{
      return of(products);
    }
    public getProductCatalog(id:number,gender:string): Observable<any>{
      return of(products);
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCatalogComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule  ],
      providers:[{
        provide : ProductService,useClass:MockService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatalogComponent);
    component = fixture.componentInstance;
    serviceMock=TestBed.inject(ProductService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test searchProducts and  getProductCatalog', () => {
    expect(component).toBeTruthy();
    //const res="newUser@gmail.com";
    
    jest.spyOn(serviceMock,'searchProducts').mockReturnValue(of(products));
    jest.spyOn(serviceMock,'getProductCatalog').mockReturnValue(of(products));
    component.getProductsByGenderAndCategoryId();
    component.getSearchProducts();
     expect(serviceMock.searchProducts).toHaveBeenCalled();
     expect(serviceMock.getProductCatalog).toHaveBeenCalled();
     
     
    //  spyOn(serviceMock, 'addUser').and.callThrough();
    //  expect(component.email).toBe(u.email);
     //fixture.detectChanges();
     //expect(component.email).toBe("new");
     //spyOn(serviceMock, 'addUser').and.callThrough();
      //expect(component.email).toBe(res);
  });
});
