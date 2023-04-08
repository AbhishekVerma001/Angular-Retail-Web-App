import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCatalogComponent } from '../product-catalog/product-catalog.component';
import { LoginService } from 'src/app/services/login.service';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let serviceMock:LoginService;
  let fakeToken="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBYmNAZ21haWwuY29tIiwiaWF0IjoxNjgwNTQ0OTY3LCJleHAiOjE2ODA1NDY3Njd9.cAiTEXq_1LzEUF8tzoykKWTMNy4VdTOl85NxqSscREQ"

  // class MockService{
  //   public executeAuthenticationService(email:string,password:string): Observable<any>{
  //     return of(fakeToken);
  //   }
  //}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule,RouterTestingModule.withRoutes([
        { path: 'products', component: ProductCatalogComponent}
    ])],
    providers:[
     
        LoginService
      
    ]
    })
    .compileComponents();
    window.alert = jest.fn();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    serviceMock=TestBed.inject(LoginService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test Authenticate', () => {
    expect(component).toBeTruthy();
    const res="newUser@gmail.com";
    const email="newUser@gmail.com";
    const password="A1234567"
    jest.spyOn(serviceMock,'executeAuthenticationService').mockReturnValue(of(fakeToken));
  component.Authenticate(email,password);
    
    expect(serviceMock.executeAuthenticationService).toHaveBeenCalled();
    //fixture.detectChanges();
    //expect(component.toLogin()).toHaveBeenCalledTimes(1);
  });
});
