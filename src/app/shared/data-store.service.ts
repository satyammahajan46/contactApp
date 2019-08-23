import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ContactService } from "../contacts/contact.service";
import { Contact } from "../contacts/contact.model";
import {map} from "rxjs/operators"
import { AuthService } from "../auth/auth-service";
@Injectable()
export class DataStore {
    constructor(private http: Http, private cService: ContactService, private authService: AuthService) {

    }

    storeContacts(){
        return this.http.put("https://http-angular-f6814.firebaseio.com/recipes.json", this.cService.getContacts());
    }

    getContacts(){
        const token = this.authService.getToken();
        return this.http.get('https://http-angular-f6814.firebaseio.com/recipes.json?auth='+token).pipe(
            map(
                (response: Response) => {
                    const recipes: Contact[] = response.json();
                    for (const rec of recipes) {
                        if (!rec['phoneTypes']) {
                            rec['phoneTypes'] = [];
                        }
                    }
                    return recipes;
                }
            )
        )
        .subscribe(
            (contacts: Contact[]) => {
                //const recipes: Recipe[] = response.json();
                this.cService.setContacts(contacts);
            }
        );
    }
}