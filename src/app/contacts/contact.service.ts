import { Contact } from "./contact.model";
import { Injectable } from "@angular/core";
import { PhoneType } from "../shared/PhoneType.model";
//import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class ContactService {
    contactChange: Subject<Contact[]>;
    private contacts: Contact[] = [];
    

    constructor() {
        this.contactChange = new Subject<Contact[]>();
     }

    

    getContacts(): Contact[] {
        return this.contacts.slice();
    }
    /*
    addtoList(ingre: PhoneType[]) {
        this.slService.addIngredientsFromRecipe(ingre);
    }
    */
    getContact(index: number): Contact {
        return this.contacts[index];
    }

    addContact(con: Contact){
        this.contacts.push(con);
        this.contactChange.next(this.contacts.slice());
    }

    updateContact(con: Contact, i: number){
        this.contacts[i] = con;
        this.contactChange.next(this.contacts.slice());
    }

    deleteContact(i: number){
        this.contacts.splice(i, 1);
        this.contactChange.next(this.contacts.slice());
    }

    setContacts(cs: Contact[]){
        this.contacts = cs;
        this.contactChange.next(this.contacts.slice());
    }
}