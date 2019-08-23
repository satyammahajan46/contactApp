import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "./auth-service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private aSer: AuthService, private router:Router, private route:ActivatedRoute){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(!this.aSer.isAuth()){
            this.router.navigate(['../signin'], { relativeTo: this.route });
        }
        else{
            return this.aSer.isAuth();
        }
        
    }

}