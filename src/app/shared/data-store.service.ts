import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { ContactService } from "../contacts/contact.service";
import { Contact } from "../contacts/contact.model";
import {map, tap} from "rxjs/operators"
import { AuthService } from "../auth/auth-service";
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class DataStore {
    constructor(private httpC: HttpClient,private http: Http, private cService: ContactService, private authService: AuthService) {

    }

    storeContacts(){
        //console.log(this.authService.getToken());
        /*
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Auth-Token', this.authService.getToken());
        //headers.app
        const options = new RequestOptions({ headers: headers });
        console.log(options);*/
        //return this.httpC.put('https://contact-ed5b1.firebaseio.com/contact.json', this.cService.getContacts());
        return this.httpC.put('https://contact-ed5b1.firebaseio.com/contact.json', this.cService.getContacts(), {
            params: new HttpParams().set('auth', this.authService.getToken())
        });
    }

    getContacts(){
        
        return this.http.get('https://contact-ed5b1.firebaseio.com/contact.json?auth=' + this.authService.getToken()).pipe(
            map(
                (response: Response) => {
                    const contacts: Contact[] = response.json();
                    for (const rec of contacts) {
                        if (!rec['phoneTypes']) {
                            rec['phoneTypes'] = [];
                        }
                    }
                    return contacts;
                }
            )
        ,tap(contacts =>{
            this.cService.setContacts(contacts);
        }) 
        );
    }
}