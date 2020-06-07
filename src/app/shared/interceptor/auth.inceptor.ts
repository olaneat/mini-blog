import {Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import {AuthService } from '../../core/auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
     const token = this.authService.getToken();
     req = req.clone({
       setHeaders: {
         Authorization: 'Bearer' + token,
       }
     });
     return next.handle(req);
  }
}
