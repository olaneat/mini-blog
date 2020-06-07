import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router } from '@angular/router';
import {AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
     public authService: AuthService,
     public route: Router
  ){ }

     canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggined !== true){
        alert('Unathouized access, kinldy login ');
        this.route.navigate(['login']);
      }

      return true;
  }

}
