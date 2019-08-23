import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { ContactStartComponent } from "./contact-start/contact-start.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactEditComponent } from "./contact-edit/contact-edit.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { ContactItemComponent } from "./contact-list/contact-item/contact-item.component";
import { DropdownDirective } from "../shared/dropdown.directive";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactRoutingModule } from "./contact-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LimitChars } from '../shared/limitChar.pipe';

@NgModule({
    declarations: [
        ContactComponent,
        ContactStartComponent,
        ContactListComponent,
        ContactEditComponent,
        ContactDetailComponent,
        ContactItemComponent,
        LimitChars
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContactRoutingModule,
        SharedModule
    ]
})
export class ContactModule{

}