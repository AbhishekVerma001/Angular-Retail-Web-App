import { User } from './../common/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  //private url = 'http://localhost:8083/signup/add';
  private url = 'http://localhost:9898/auth/register';

  constructor(private httpClient: HttpClient) { }


  addUser(user: User): Observable<any> {
    console.log("user=",user);
    console.log("url=",this.url);
    return this.httpClient.post<User>(this.url, user);    
  }
 
}
