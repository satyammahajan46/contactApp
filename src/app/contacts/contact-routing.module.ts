import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { ContactStartComponent } from "./contact-start/contact-start.component";
import { ContactEditComponent } from "./contact-edit/contact-edit.component";
import { AuthGuard } from "../auth/auth-guard";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { ContactResolveService } from './contact-resolve-service';

const contactRoute:Routes=[
    {
        path: '', component: ContactComponent
        , children: [
            { path: '', component: ContactStartComponent, resolve: [ContactResolveService] },
            { path: 'new', component: ContactEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: ContactDetailComponent, resolve: [ContactResolveService] },
            { path: ':id/edit', component: ContactEditComponent, canActivate: [AuthGuard], resolve: [ContactResolveService] }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(contactRoute)],
    exports: [RouterModule]
})
export class ContactRoutingModule{

}