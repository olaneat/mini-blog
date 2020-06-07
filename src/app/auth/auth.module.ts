import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
  ],
})
export class AuthModule { }
