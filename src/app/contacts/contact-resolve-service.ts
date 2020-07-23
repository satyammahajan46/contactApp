import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { DataStore } from '../shared/data-store.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class ContactResolveService implements Resolve<Contact>{
    constructor(private dataStore: DataStore){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Contact[] | import("rxjs").Observable<Contact[]> | Promise<Contact[]> {
        return this.dataStore.getContacts();
    }
   
    
}