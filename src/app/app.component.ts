import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBhHFG9pq9-pqR9lpgsNVFUJ1WjHWkqmIk",
      authDomain: "http-angular-f6814.firebaseapp.com"
    });
  }
  constructor() {  }
  
}
