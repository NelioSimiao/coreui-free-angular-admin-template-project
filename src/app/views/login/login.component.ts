import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenStorageService } from './token-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = false;
  errorMessage = null;
  jwtHelpe = new JwtHelperService();
  roles: string[] = [];

  token = null;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private tokenService: TokenStorageService) { }



  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  get form() {
    return this.loginForm.controls;
  }

  login() {

    this.submitted = true;
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password).subscribe(
        data => {
         // this.tokenService.saveToken(data.token);
          this.tokenService.saveUser(data);
          this.router.navigateByUrl('/dashboard');
         // this.token = this.jwtHelpe.decodeToken(data.token);
        }, err => {
          console.log(err)
          this.error = true;
          this.errorMessage = err.message;
        }
      );


  }
}
