import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  id: number;
  constructor(private cService: ContactService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (parms: Params)=>{
        this.id = +parms['id'];
        this.contact = this.cService.getContact(this.id);
      }
    );
  }

  onDeleteContact(){
    this.cService.deleteContact(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onEditContact(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
