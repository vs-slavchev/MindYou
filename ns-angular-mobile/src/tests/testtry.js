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
describe("Tests for app/app.component.ts", function () {
    it("Verify default message", function () {
        var appComponent = new component.AppComponent();
        expect(appComponent.message).toBe("16 taps left");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3R0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELGtFQUFrRTtBQUNsRSxnRUFBZ0U7QUFDaEUsRUFBRTtBQUNGLGlEQUFpRDtBQUNqRCxxQ0FBcUM7QUFDckMsTUFBTTtBQUNOLHFCQUFxQjtBQUNyQixvRUFBb0U7QUFDcEUsTUFBTTtBQUNOLDREQUE0RDtBQUM1RCxrQ0FBa0M7QUFDbEMsT0FBTztBQUNQLDRDQUE0QztBQUM1QyxzQ0FBc0M7QUFDdEMsTUFBTTtBQUVOLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzFDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRS9DLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRTtJQUN2QyxFQUFFLENBQUMsd0JBQXdCLEVBQUU7UUFDekIsSUFBSSxZQUFZLEdBQUcsSUFBSSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7VGVzdEJlZCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG4vLyBpbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xyXG4vLyAvLyBpbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudCc7XHJcbi8vXHJcbi8vIGRlc2NyaWJlKCdhIHByb2R1Y3QtZGV0YWlsIGNvbXBvbmVudCcsICgpID0+IHtcclxuLy8gICAgIGxldCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50O1xyXG4vLyB9KTtcclxuLy8gYmVmb3JlRWFjaCgoKSA9PiB7XHJcbi8vICAgICBUZXN0QmVkLmNvbu+sgWd1cmVUZXN0aW5nTW9kdWxlKHtwcm92aWRlcnM6IFtJdGVtc0NvbXBvbmVudF19KTtcclxuLy8gfSk7XHJcbi8vIGJlZm9yZUVhY2goaW5qZWN0KFtJdGVtc0NvbXBvbmVudF0sIChJdGVtc0NvbXBvbmVudCkgPT4ge1xyXG4vLyAgICAgY29tcG9uZW50ID0gSXRlbXNDb21wb25lbnQ7XHJcbi8vIH0pKTtcclxuLy8gVGVzdGl0KCdzaG91bGQgaGF2ZSBhbiBpbnN0YW5jZScsICgpID0+IHtcclxuLy8gICAgIGV4cGVjdChjb21wb25lbnQpLnRvQmVEZe+sgW5lZCgpO1xyXG4vLyB9KTtcclxuXHJcbnZhciByZWZsZWN0ID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XHJcbnZhciBjb21wb25lbnQgPSByZXF1aXJlKFwifi9hcHAvYXBwLmNvbXBvbmVudFwiKTtcclxuXHJcbmRlc2NyaWJlKFwiVGVzdHMgZm9yIGFwcC9hcHAuY29tcG9uZW50LnRzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaXQoXCJWZXJpZnkgZGVmYXVsdCBtZXNzYWdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhcHBDb21wb25lbnQgPSBuZXcgY29tcG9uZW50LkFwcENvbXBvbmVudCgpO1xyXG4gICAgICAgIGV4cGVjdChhcHBDb21wb25lbnQubWVzc2FnZSkudG9CZShcIjE2IHRhcHMgbGVmdFwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuIl19