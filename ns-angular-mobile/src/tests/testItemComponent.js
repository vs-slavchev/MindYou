"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {ItemService} from "~/app/home/item/item.service";
var reflect = require("reflect-metadata");
var component = require("~/app/home/item/items.component");
var service = require("~/app/home/item/item.service");
var router = require("@angular/router");
// Router, ActivatedRoute
// var component = require("~/app/home/item/items.component");
describe("Tests for app/home/item/items.component.ts", function () {
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
    it("Verify default message", function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdEl0ZW1Db21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0SXRlbUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWtCQSw0REFBNEQ7QUFDNUQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDM0QsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDdEQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDeEMseUJBQXlCO0FBQ3pCLDhEQUE4RDtBQUU5RCxRQUFRLENBQUMsNENBQTRDLEVBQUU7SUFDbkQsZ0RBQWdEO0lBQ2hELDREQUE0RDtJQUM1RCxnQ0FBZ0M7SUFFaEMscUJBQXFCO0lBQ3JCLEVBQUU7SUFDRixnRUFBZ0U7SUFDaEUsdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLEVBQUU7SUFDRiwyQ0FBMkM7SUFDM0MseURBQXlEO0lBQ3pELEVBQUU7SUFDRiw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLEVBQUU7SUFDRiw2Q0FBNkM7SUFDN0MsOENBQThDO0lBQzlDLEVBQUU7SUFDRixNQUFNO0lBRU4sMEVBQTBFO0lBQzFFLDZGQUE2RjtJQUM3RixpQ0FBaUM7SUFDakMsa0RBQWtEO0lBQzlDLHdEQUF3RDtJQUM1RCxNQUFNO0lBQ04sSUFBSSxjQUFjLENBQUM7SUFDbkIsVUFBVSxDQUFDO1FBQ1AsY0FBYyxHQUFHLElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHdCQUF3QixFQUFFO1FBQ3pCLDRDQUE0QztRQUM1QywyREFBMkQ7UUFDM0QscURBQXFEO1FBQ3JELGtDQUFrQztRQUNsQyxnQ0FBZ0M7UUFHaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsOERBQThEO0FBQzlELEVBQUU7QUFDRix1Q0FBdUM7QUFDdkMsMEJBQTBCO0FBQzFCLDhCQUE4QjtBQUM5QiwyREFBMkQ7QUFDM0QsVUFBVTtBQUNWLDZDQUE2QztBQUM3Qyx1RUFBdUU7QUFDdkUsVUFBVTtBQUNWLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge1Rlc3RCZWQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuLy8gaW1wb3J0IHtJdGVtc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcclxuLy8gLy8gaW1wb3J0IHtJdGVtc0NvbXBvbmVudH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQnO1xyXG4vL1xyXG4vLyBkZXNjcmliZSgnYSBwcm9kdWN0LWRldGFpbCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbi8vICAgICBsZXQgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudDtcclxuLy8gfSk7XHJcbi8vIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4vLyAgICAgVGVzdEJlZC5jb27vrIFndXJlVGVzdGluZ01vZHVsZSh7cHJvdmlkZXJzOiBbSXRlbXNDb21wb25lbnRdfSk7XHJcbi8vIH0pO1xyXG4vLyBiZWZvcmVFYWNoKGluamVjdChbSXRlbXNDb21wb25lbnRdLCAoSXRlbXNDb21wb25lbnQpID0+IHtcclxuLy8gICAgIGNvbXBvbmVudCA9IEl0ZW1zQ29tcG9uZW50O1xyXG4vLyB9KSk7XHJcbi8vIFRlc3RpdCgnc2hvdWxkIGhhdmUgYW4gaW5zdGFuY2UnLCAoKSA9PiB7XHJcbi8vICAgICBleHBlY3QoY29tcG9uZW50KS50b0JlRGXvrIFuZWQoKTtcclxuLy8gfSk7XHJcbi8vIGltcG9ydCB7IFRlc3RCZWQsIENvbXBvbmVudEZpeHR1cmUgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5pbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG52YXIgcmVmbGVjdCA9IHJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xyXG52YXIgY29tcG9uZW50ID0gcmVxdWlyZShcIn4vYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnRcIik7XHJcbnZhciBzZXJ2aWNlID0gcmVxdWlyZShcIn4vYXBwL2hvbWUvaXRlbS9pdGVtLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXIgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG4vLyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlXHJcbi8vIHZhciBjb21wb25lbnQgPSByZXF1aXJlKFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiKTtcclxuXHJcbmRlc2NyaWJlKFwiVGVzdHMgZm9yIGFwcC9ob21lL2l0ZW0vaXRlbXMuY29tcG9uZW50LnRzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gdmFyIGNvbXBvbmVudCA9IG5ldyBjb21wb25lbnQuSXRlbXNDb21wb25lbnQ7XHJcbiAgICAvLyB2YXIgZml4dHVyZSA9IENvbXBvbmVudEZpeHR1cmU8Y29tcG9uZW50Lkl0ZW1zQ29tcG9uZW50PjtcclxuICAgIC8vIHZhciBpdGVtU2VydmljZTogSXRlbVNlcnZpY2U7XHJcblxyXG4gICAgLy8gYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIHJlZmluZSB0aGUgdGVzdCBtb2R1bGUgYnkgZGVjbGFyaW5nIHRoZSB0ZXN0IGNvbXBvbmVudFxyXG4gICAgLy8gICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XHJcbiAgICAvLyAgICAgICAgIGRlY2xhcmF0aW9uczogW0l0ZW1zQ29tcG9uZW50XSxcclxuICAgIC8vICAgICAgICAgcHJvdmlkZXJzOiBbSXRlbVNlcnZpY2VdXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIGNyZWF0ZSBjb21wb25lbnQgYW5kIHRlc3QgZml4dHVyZVxyXG4gICAgLy8gICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChJdGVtc0NvbXBvbmVudCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIGdldCB0ZXN0IGNvbXBvbmVudCBmcm9tIHRoZSBmaXh0dXJlXHJcbiAgICAvLyAgICAgY29tcG9uZW50ID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gVXNlclNlcnZpY2UgcHJvdmlkZWQgdG8gdGhlIFRlc3RCZWRcclxuICAgIC8vICAgICBpdGVtU2VydmljZSA9IFRlc3RCZWQuZ2V0KEl0ZW1TZXJ2aWNlKTtcclxuICAgIC8vXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBpdCgnY2FuTG9naW4gcmV0dXJucyBmYWxzZSB3aGVuIHRoZSB1c2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkJywgKCkgPT4ge1xyXG4gICAgLy8gICAgIHNweU9uKGl0ZW1TZXJ2aWNlLCAnZ2V0QWN0aXZpdGllcycpLmFuZC5yZXR1cm5WYWx1ZShbeydpZCc6IFwiMVwiLCAnbmFtZSc6IFwicnVubmluZ1wifV0pO1xyXG4gICAgLy8gICAgIGNvbXBvbmVudC5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAvLyAgICAgZXhwZWN0KGl0ZW1TZXJ2aWNlLml0ZW1zLmxlbmd0aCgpKS50b0JlKDEpO1xyXG4gICAgICAgIC8vIGV4cGVjdChpdGVtU2VydmljZS5nZXRBY3Rpdml0aWVzKS50b0hhdmVCZWVuQ2FsbGVkKCk7XHJcbiAgICAvLyB9KTtcclxuICAgIHZhciBpdGVtc0NvbXBvbmVudDtcclxuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGl0ZW1zQ29tcG9uZW50ID0gbmV3IGNvbXBvbmVudC5JdGVtc0NvbXBvbmVudCgpO1xyXG4gICAgfSk7XHJcbiAgICBpdChcIlZlcmlmeSBkZWZhdWx0IG1lc3NhZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gdmFyIF9yb3V0ZXIgPSBUZXN0QmVkLmdldChyb3V0ZXIuUm91dGVyKTtcclxuICAgICAgICAvLyB2YXIgYWN0aXZhdGVkUm91dGUgPSBUZXN0QmVkLmdldChyb3V0ZXIuQWN0aXZhdGVkUm91dGUpO1xyXG4gICAgICAgIC8vIHZhciBpdGVtc0NvbXBvbmVudCA9IG5ldyBjb21wb25lbnQuSXRlbXNDb21wb25lbnQoXHJcbiAgICAgICAgLy8gICAgIG5ldyBzZXJ2aWNlLkl0ZW1zU2VydmljZSgpLFxyXG4gICAgICAgIC8vICAgICBfcm91dGVyLCBhY3RpdmF0ZWRSb3V0ZSk7XHJcblxyXG5cclxuICAgICAgICBleHBlY3QoaXRlbXNDb21wb25lbnQuaGVsbG9Xb3JsZCgpKS50b0JlKFwiRGF2YWFhaiFcIik7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyB2YXIgY29tcG9uZW50ID0gcmVxdWlyZShcIn4vYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnRcIik7XHJcbi8vXHJcbi8vIGRlc2NyaWJlKFwiSGVsbG8gd29ybGRcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICB2YXIgaXRlbXNDb21wb25lbnQ7XHJcbi8vICAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgIGl0ZW1zQ29tcG9uZW50ID0gbmV3IGNvbXBvbmVudC5JdGVtc0NvbXBvbmVudCgpO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICBpdChcInJldHVybnMgSGVsbG8gd29ycmxkXCIsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgZXhwZWN0KGl0ZW1zQ29tcG9uZW50LmhlbGxvV29ybGQoKSkudG9FcXVhbChcIkhlbGxvIHdvcmxkIVwiKTtcclxuLy8gICAgIH0pO1xyXG4vLyB9KTtcclxuIl19