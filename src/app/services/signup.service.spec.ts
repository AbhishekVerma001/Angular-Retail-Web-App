import { TestBed } from '@angular/core/testing';

import { SignupService } from './signup.service';
import { User } from '../common/user';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

describe('SignupService', () => {
  let service: any;
  
  const error=new HttpErrorResponse({
    error: 'Email already exists',
    status:403
  })

  const mockFn: jest.Mock<(u: User) => Observable<any>> = jest.fn(u => {
    if (u === u) {
      return error;
    } else {
      return u.email;
    }
  });
  let u:User;
  let httpMock: HttpTestingController;
  let httpClientSpy:any;

  beforeEach(() => {
    httpClientSpy={
      post:mockFn

    }
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    u=new User();
    
    httpMock = TestBed.inject(HttpTestingController);
   
  });
  afterEach(() => {
    httpMock.verify();
});


  it('should test addUser', (done) => {
    service = TestBed.inject(SignupService);
    expect(service).toBeTruthy();
    httpMock = TestBed.inject(HttpTestingController);
    const res="fake@gmail.com";
    const url='http://localhost:9898/auth/register';
    u.fname="fakeFname";
    u.lname="fakeLname";
    u.email="fake@gmail.com";
    u.mobile=6789123450;
    u.password="A1234567";
   
    service.addUser(u).subscribe({
      next:data => {
        expect(data).toEqual(res);
        
        done();
      }
      });
 
    const req = httpMock.expectOne(url);
        expect(req.request.method).toBe('POST');
        
        req.flush(res);
        

  });
  
  it('should throw error for adding a Registered user', () => {
   
   service=new SignupService(httpClientSpy);
    expect(service).toBeTruthy();
   
    const res="abhishek@gmail.com";
   
    const url='http://localhost:9898/auth/register';
    u.fname="fakeFname";
    u.lname="fakeLname";
    u.email="abhishek@gmail.com";
    u.mobile=6789123450;
    u.password="A1234567";
    let response: any;
    let errResponse: any;

    jest.spyOn(httpClientSpy,'post').mockReturnValue(throwError(()=>errResponse));
    service.addUser(u).subscribe({
      next:data =>{console.log('returned data=',data)} , 
      error:err =>{ errResponse = err;
        expect(err.error).toContain('Email already exists')
        
      }
    });
    expect(httpClientSpy.post).toBeCalledTimes(1);
    expect(httpClientSpy.post).toHaveBeenCalledWith(url,u);
 

  });
});
//npm test -- signup.service.spec.ts