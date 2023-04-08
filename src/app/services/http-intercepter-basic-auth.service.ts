import { LoginService } from './login.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{


  constructor(
    private loginService : LoginService
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler){
    
    let basicAuthHeaderString = this.loginService.getAuthenticatedToken();
    // if(basicAuthHeaderString==null)
    //   basicAuthHeaderString="notDefinedYet";
    console.log("token=",basicAuthHeaderString);
    let username = this.loginService.getAuthenticatedUser()


    if(basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders : {
            'Authorization' : `${basicAuthHeaderString}`
          }
        })
    }
    request = request.clone({
      setHeaders : {
          'Custom-Header' : 'Custom-Value'
        }
      })
    return next.handle(request);
  }




}
