import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  email;
  password: string;

  form = new FormGroup({
  
     email: new FormControl(),
     password: new FormControl(),
  
  }) 

  constructor(
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
  }

login(form) {
    console.log(form)
    this.authenticationService.SignIn(form);
    this.email = '';
    this.password = '';
    
  }
}
