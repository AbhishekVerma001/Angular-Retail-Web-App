import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMenuComponent } from './product-menu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from 'src/app/services/product.service';
import { of } from 'rxjs';

describe('ProductMenuComponent', () => {
  let component: ProductMenuComponent;
  let fixture: ComponentFixture<ProductMenuComponent>;
  let serviceMock:any;

  beforeEach(async () => {
    serviceMock={
      getProductCategories:jest.fn()
    }
    await TestBed.configureTestingModule({
      declarations: [ ProductMenuComponent ],
      imports: [HttpClientTestingModule  ],
      providers:[{
        provide : ProductService,useValue:serviceMock}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMenuComponent);
    component = fixture.componentInstance;
    //serviceMock=TestBed.inject(ProductService);
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test getProductCategories', () => {
    expect(component).toBeTruthy();
    const Category= [
      {
          "id": 1,
          "categoryName": "Flip_Flops",
          "_links": {
              "self": {
                  "href": "http://192.168.1.107:8081/product-category/1"
              },
              "category": {
                  "href": "http://192.168.1.107:8081/product-category/1"
              },
              "products": {
                  "href": "http://192.168.1.107:8081/product-category/1/products"
              }
          }
      },
      {
          "id": 2,
          "categoryName": "Sandal",
          "_links": {
              "self": {
                  "href": "http://192.168.1.107:8081/product-category/2"
              },
              "category": {
                  "href": "http://192.168.1.107:8081/product-category/2"
              },
              "products": {
                  "href": "http://192.168.1.107:8081/product-category/2/products"
              }
          }
      },
      {
          "id": 3,
          "categoryName": "Shoes",
          "_links": {
              "self": {
                  "href": "http://192.168.1.107:8081/product-category/3"
              },
              "category": {
                  "href": "http://192.168.1.107:8081/product-category/3"
              },
              "products": {
                  "href": "http://192.168.1.107:8081/product-category/3/products"
              }
          }
      }
  ]


    
    //expect(serviceMock.getProductCategories).toHaveBeenCalled();
    jest.spyOn(serviceMock,'getProductCategories').mockReturnValue(of(Category))
    //component.listProductCategories();
    fixture.detectChanges();
    expect(component.productCategories).toBe(Category);
  });
});
