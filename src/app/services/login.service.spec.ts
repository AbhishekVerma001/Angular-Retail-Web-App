import { TestBed, getTestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(LoginService);
  });

  afterEach(() => {
    httpMock.verify();
});

  it('should test executeAuthenticationService', (done) => {
    expect(service).toBeTruthy();
    httpMock = TestBed.inject(HttpTestingController);
    const res={
      token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBYmNAZ21haWwuY29tIiwiaWF0IjoxNjgwNDQ4NjIwLCJleHAiOjE2ODA0NTA0MjB9.4YJBwPZ71CYr6xMQXqNXn5E2uIJ13WMW1QCMxVHr-8M"
  }
    const url = 'http://localhost:8080/auth/token';
    const username:string = 'abhishek@gmail.com';
    const password="A1234567";
    const token="";
    service.executeAuthenticationService(username,password).subscribe({
      next:data => {
        expect(data.token).toEqual(res.token);
        
        done();
      }
    });
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush(res);
  });
});
