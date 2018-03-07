import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
	constructor(){
		console.log("This msg Print from AppComponent's Constructor..!")
	}
}
