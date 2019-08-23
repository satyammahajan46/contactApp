import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { Contact } from '../../contacts/contact.model';
import { DataStore } from '../../shared/data-store.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private dataService: DataStore, private aService: AuthService) { }

  onSaveData(){
    this.dataService.storeContacts().subscribe(
      (response: Response)=>{
        console.log(response);
      }
    );
  }
  onFetchData(){
    this.dataService.getContacts();
  }

  logout(){
    this.aService.logout();
  }

  isAuthenticated(){
    return this.aService.isAuth();
  }

}
