import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./core/home/home.component";



const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    { path: 'contacts', loadChildren: './contacts/contact.module#ContactModule' }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}