import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService{
    private token:string;
    constructor(private router: Router){
        this.token=null;
    }
    signUpUser(email: string, password:string){
        return firebase.auth().createUserWithEmailAndPassword(email, password);
        
    }

    signInUser(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response=>{
                firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    );
                this.router.navigate(['/']);
            }
        );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string)=>this.token=token
        );
        return this.token;
    }

    isAuth(){
        return this.token!=null;
    }

    logout(){
        firebase.auth().signOut();
        this.token=null;
    }
}