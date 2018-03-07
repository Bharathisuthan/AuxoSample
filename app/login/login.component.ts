import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { alert, prompt, PromptResult, inputType } from "ui/dialogs";

@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

    isLogin: boolean = true;
    email: string;
    password: string;

    constructor(private routerExtensions: RouterExtensions) {
        console.log("This Message print from LoginComponent's constructor..!");
    }

    ngOnInit(): void {

    }

    submit(email, pass) {
        console.log(email+" "+pass);
        if(this.isLogin) {
            this.login();
        }else{
            this.signIn();
        }
    }

    login() {
        this.routerExtensions.navigate(['/items'],{
            clearHistory: true,
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
        console.log("Login Successfully..!");
    }

    signIn() {
        let options = {
            title: "Signin Success",
            message: "You Successfully signed in with AuxoSample",
            okButtonText: "OK"
        };

        alert(options).then(() => {
            this.isLogin = ! this.isLogin;
            console.log("Signin Successfullly..!");
        });
    }

    ifNew() {
        this.isLogin = ! this.isLogin;
    }

    forgotPassword() {
        console.log("todo...");
    }
}