import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { Ham } from "../shared/ham.directive";
import { ContactService } from "../contacts/contact.service";
import { DataStore } from "../shared/data-store.service";
import { AuthService } from "../auth/auth-service";
import { AuthGuard } from "../auth/auth-guard";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        Ham
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ ContactService, DataStore, AuthService, AuthGuard],
})
export class CoreModule{}