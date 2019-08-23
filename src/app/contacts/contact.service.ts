import { Contact } from "./contact.model";
import { Injectable } from "@angular/core";
import { PhoneType } from "../shared/PhoneType.model";
//import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class ContactService {
    contactChange: Subject<Contact[]>;
    private contacts: Contact[] = [
        new Contact("Test Subject!", "Hi there! my name is Satyam Mahajan, and I am the creater of this awesome website hope you like it!!", "https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg", [
            new PhoneType('Work', '66666666'),
            new PhoneType('Home', '14864415'),
            new PhoneType('Address', '125St DreamLand, Brain')
        ])
    ];
    

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