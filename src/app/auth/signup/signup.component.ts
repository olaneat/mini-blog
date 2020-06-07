import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
              public fb: FormBuilder,
              private authService: AuthService,
              private route: Router,
    )
    {
      this.signupForm = this.fb.group({
        email: [''],
        password: [''],
        username: [''],
      });
    }

  ngOnInit(): void {}

  userRegistration(){
    this.authService.userSignUp(this.signupForm.value).subscribe(
      response => {
        alert('registration successful');
        this.route.navigate(['login']);
      },
      error => {
        'registration error, try again';
      }
    );
  }
}
