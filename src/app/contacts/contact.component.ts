import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
  }

}
