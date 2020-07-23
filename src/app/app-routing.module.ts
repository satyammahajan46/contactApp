import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./core/home/home.component";
import { ContactResolveService } from './contacts/contact-resolve-service';
import { AuthGuard } from './auth/auth-guard';



const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    { path: 'contacts', loadChildren: './contacts/contact.module#ContactModule', canActivate: [AuthGuard],resolve:[ContactResolveService] }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}