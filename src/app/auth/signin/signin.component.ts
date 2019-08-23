import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMessage:string;
  constructor(private authService: AuthService) { 
    this.errorMessage="";
  }

  ngOnInit() {
  }

  onSignin(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signInUser(email, password).catch(
      (error) => { 
        this.errorMessage = JSON.parse(JSON.stringify(error)) 
      }
    );
  }

  isErrorAvai() {
    if (this.errorMessage.length === 0) {
      return false;
    }
    return true;
  }

  getMessage() {
    if (this.errorMessage['message'])
      return this.errorMessage['message'];
    return "";
  }

}
