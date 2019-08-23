import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage: string;
  constructor(private authService: AuthService) {
    this.errorMessage = "";
   }

  ngOnInit() {
  }

  onSignUp(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUpUser(email, password).catch(
      error => {
        this.errorMessage = JSON.parse(JSON.stringify(error))
      }
    );
    //console.log(this.errorMessage)
    // console.log(obj);
    // console.log(obj['a']);
    // if(!obj["i"]){
    //   console.log('amjda');
    // }
  }

  isErrorAvai(){
    if(this.errorMessage.length===0){
      return false;
    }
    return true;
  }

  getMessage(){
    if (this.errorMessage['message'])
      return this.errorMessage['message'];
    return "";
  }
}
