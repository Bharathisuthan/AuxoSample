import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private routerExtensions: RouterExtensions,
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }

    logout() {
        this.routerExtensions.navigate(['/login'], { 
            clearHistory: true,
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
    }
}
