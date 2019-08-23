import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model'
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  contacts: Contact[];
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.contactService.contactChange.subscribe(
      (contact: Contact[]) => {
        this.contacts = contact;
      }
    );
    this.contacts = this.contactService.getContacts();
    //console.log(this.recipes);
  }

  onNewContact() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
