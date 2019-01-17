// import {TestBed, inject} from '@angular/core/testing';
// import {ItemsComponent} from "~/app/home/item/items.component";
// // import {ItemsComponent} from './product-detail.component';
//
// describe('a product-detail component', () => {
//     let component: ItemsComponent;
// });
// beforeEach(() => {
//     TestBed.conﬁgureTestingModule({providers: [ItemsComponent]});
// });
// beforeEach(inject([ItemsComponent], (ItemsComponent) => {
//     component = ItemsComponent;
// }));
// Testit('should have an instance', () => {
//     expect(component).toBeDeﬁned();
// });

var reflect = require("reflect-metadata");
var component = require("~/app/app.component");

describe("Tests for app/app.component.ts", function() {
    it("Verify default message", function() {
        var appComponent = new component.AppComponent();
        expect(appComponent.message).toBe("16 taps left");
    });
});
