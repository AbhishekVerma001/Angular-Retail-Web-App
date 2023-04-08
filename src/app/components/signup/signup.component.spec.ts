import { ProductCatalogComponent } from './../product-catalog/product-catalog.component';
import { Observable, of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { SignupService } from 'src/app/services/signup.service';
import { User } from 'src/app/common/user';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
//import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let serviceMock:SignupService;

  beforeEach(async () => {
    class MockService{
      public addUser(u:User): Observable<any>{
        return of(u.email);
      }
    }
    // serviceMock={
    //   addUser:jest.fn()
    // }
    window.alert = jest.fn();
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule,RouterTestingModule.withRoutes([
        { path: 'products', component: ProductCatalogComponent}
    ])
  ],
      providers:[
        {
          provide:
        SignupService,useClass:MockService
        }
      ]
      ,
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    serviceMock=TestBed.inject(SignupService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test addUser', () => {
    expect(component).toBeTruthy();
    const res="newUser@gmail.com";
    const u:User={
      "fname":"Abhishek",
    "lname":"Verma",
    "mobile":3533253674,
    "email":"newUser@gmail.com",
    "password":"A1234567"

    }
    jest.spyOn(serviceMock,'addUser').mockReturnValue(of(res));
    component.register(u);
     expect(serviceMock.addUser).toHaveBeenCalled();
     
    //  spyOn(serviceMock, 'addUser').and.callThrough();
    //  expect(component.email).toBe(u.email);
     //fixture.detectChanges();
     //expect(component.email).toBe("new");
     //spyOn(serviceMock, 'addUser').and.callThrough();
      //expect(component.email).toBe(res);
  });
});
