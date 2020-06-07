import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {environment } from '../../environments/environment';
import {SignupDetail, LoginDetail} from '../models/userDetail';
import { Observable, throwError } from 'rxjs';
import {map, catchError, } from 'rxjs/operators';
import {Router } from '@angular/router';
import { Profile } from '../profile/profile/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient, private router: Router ) { }
  url = environment.baseUrl;
  HttpOptions = new HttpHeaders().set('Content-type', 'application-json');


  userSignUp(user: SignupDetail): Observable<any>{
     const signupUrl = `${this.url}/user`;
     return this.httpClient.post(signupUrl, user).pipe(
       map(res => res),
       catchError(this.handleError)
     );
  }

  handleError(error: HttpErrorResponse){
    let msg = '';
    if (error.error instanceof ErrorEvent){
      msg = error.message;
    } else {
      msg = `Error message: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }


  getToken(){
    localStorage.getItem('access_token');
  }

  get isLoggined(): boolean {
    const token = localStorage.getItem('access_token');
    return ( token !== null) ? true : false;
  }

  userLogin(user: LoginDetail){
    const loginUrl = `${this.url}/login`;
    return this.httpClient.post(loginUrl, user)
    .subscribe((res: any) => {
      localStorage.setItem('access_token', res.token);
      this.router.navigate(['home']);
    });
  }

  getProfile(username): Observable<any>{
    const profileUrl = `${this.url}/profile/username`;
    return this.httpClient.get(profileUrl).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }
  userProfile(profile: Profile){
  }

  logOut(){
    const removeToken = localStorage.removeItem('access_token');
    if ( removeToken == null){
      this.router.navigate(['login']);
    }
  }


}
