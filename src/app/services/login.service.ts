import { map, tap } from 'rxjs/operators';
import { User } from './../common/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'
export const API_URL='http://localhost:8084'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private url = 'http://localhost:8084/login/check';
  private url = 'http://localhost:8080/auth/token';
  public isLoggedIn:boolean;
  constructor(private http: HttpClient) { }


  // verify(user: User): Observable<any> {
  //   console.log(user);
  //   return this.http.post<User>(this.url, user);    
  // }
  executeAuthenticationService(username, password) {
   
    return this.http.post<any>(
      this.url,{
        username,
        password
      }).pipe(
        map(
          data => {
            // sessionStorage.setItem(AUTHENTICATED_USER, username);
            // sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            localStorage.setItem('currentUser', JSON.stringify({
              token: `Bearer ${data.token}`,
              name:username
            }));
            //sessionStorage.setItem(TOKEN, `Bearer ${data}`);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    //return sessionStorage.getItem(AUTHENTICATED_USER)
    var user=JSON.parse(localStorage.getItem('currentUser'));
      return user?.name;
  }


  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()){
      var user=JSON.parse(localStorage.getItem('currentUser'));
      return user?.token;
    }
    
      //return sessionStorage.getItem(TOKEN)
    return null;
  }


  isUserLoggedIn() {
    //let user = sessionStorage.getItem(AUTHENTICATED_USER)
    let user=JSON.parse(localStorage.getItem('currentUser'));
    //let res=
    return !(user === null)
   // return of(res).pipe(tap((v) => console.log(v)));

  }
  checkLoggedInStatus(){
    //let user = sessionStorage.getItem(AUTHENTICATED_USER);
    let user=JSON.parse(localStorage.getItem('currentUser'));
    return !(user === null);
  }


  logout(){
    localStorage.removeItem('currentUser');
    // sessionStorage.removeItem(AUTHENTICATED_USER)
    // sessionStorage.removeItem(TOKEN)
  }


}


export class AuthenticationBean{
  constructor(public message:string) { }
}
