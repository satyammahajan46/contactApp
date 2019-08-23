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
      apiKey: "AIzaSyB-gfjWZTnSQ5TkylWnBYEO8h_a85gYw4Q",
      authDomain: "contact-ed5b1.firebaseapp.com",
      databaseURL: "https://contact-ed5b1.firebaseio.com",
      projectId: "contact-ed5b1",
      storageBucket: "",
      messagingSenderId: "357317662626",
      appId: "1:357317662626:web:6ea968f5fa722e95"
    });
  }
  constructor() {  }
  
}
