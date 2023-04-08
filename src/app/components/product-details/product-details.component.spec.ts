import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let serviceMock:any;
  let product:Product={
    "id": "1",
    "productId": 3168,
    "name": "Nike Men's Incinerate MSL White Blue Shoe",
    "gender": "Men",
    "description": "Sports Shoes",
    "unitPrice": 560,
    "imageUrl": "assets/images/products/Men/Shoes/3168.jpg",
    "active": true,
    "unitsInStock": 100,
    "dateCreated": new Date(),
    "lastUpdated": null,
    "colour": "White",
    "product_usage": "Sports",

    
};
class MockService{
  public getProduct(id:number): Observable<any>{
    return of(product);
  }
}
  beforeEach(async () => {
   
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule],
      providers:[{
        provide : ProductService,useClass:MockService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    serviceMock=TestBed.inject(ProductService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test addUser', () => {
    expect(component).toBeTruthy();
    const res="newUser@gmail.com";
 
    jest.spyOn(serviceMock,'getProduct').mockReturnValue(of(product));
    component.getProductDetails();
     expect(serviceMock.getProduct).toHaveBeenCalled();
     
    
  });
});
