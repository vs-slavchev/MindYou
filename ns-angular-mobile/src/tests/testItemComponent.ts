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
// import { TestBed, ComponentFixture } from '@angular/core/testing';
import {ItemsComponent} from "~/app/home/item/items.component";
// import {ItemService} from "~/app/home/item/item.service";
var reflect = require("reflect-metadata");
var component = require("~/app/home/item/items.component");
var service = require("~/app/home/item/item.service");
var router = require("@angular/router");
// Router, ActivatedRoute
// var component = require("~/app/home/item/items.component");

describe("Tests for app/home/item/items.component.ts", function() {
    // var component = new component.ItemsComponent;
    // var fixture = ComponentFixture<component.ItemsComponent>;
    // var itemService: ItemService;

    // beforeEach(() => {
    //
    //     // refine the test module by declaring the test component
    //     TestBed.configureTestingModule({
    //         declarations: [ItemsComponent],
    //         providers: [ItemService]
    //     });
    //
    //     // create component and test fixture
    //     fixture = TestBed.createComponent(ItemsComponent);
    //
    //     // get test component from the fixture
    //     component = fixture.componentInstance;
    //
    //     // UserService provided to the TestBed
    //     itemService = TestBed.get(ItemService);
    //
    // });

    // it('canLogin returns false when the user is not authenticated', () => {
    //     spyOn(itemService, 'getActivities').and.returnValue([{'id': "1", 'name': "running"}]);
    //     component.getActivities();
    //     expect(itemService.items.length()).toBe(1);
        // expect(itemService.getActivities).toHaveBeenCalled();
    // });
    var itemsComponent;
    beforeEach(function () {
        itemsComponent = new component.ItemsComponent();
    });
    it("Verify default message", function() {
        // var _router = TestBed.get(router.Router);
        // var activatedRoute = TestBed.get(router.ActivatedRoute);
        // var itemsComponent = new component.ItemsComponent(
        //     new service.ItemsService(),
        //     _router, activatedRoute);


        expect(itemsComponent.helloWorld()).toBe("Davaaaj!");
    });
});

// var component = require("~/app/home/item/items.component");
//
// describe("Hello world", function() {
//     var itemsComponent;
//     beforeEach(function() {
//         itemsComponent = new component.ItemsComponent();
//     });
//     it("returns Hello worrld", function(){
//         expect(itemsComponent.helloWorld()).toEqual("Hello world!");
//     });
// });
