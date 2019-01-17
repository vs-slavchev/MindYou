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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3R0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELGtFQUFrRTtBQUNsRSxnRUFBZ0U7QUFDaEUsRUFBRTtBQUNGLGlEQUFpRDtBQUNqRCxxQ0FBcUM7QUFDckMsTUFBTTtBQUNOLHFCQUFxQjtBQUNyQixvRUFBb0U7QUFDcEUsTUFBTTtBQUNOLDREQUE0RDtBQUM1RCxrQ0FBa0M7QUFDbEMsT0FBTztBQUNQLDRDQUE0QztBQUM1QyxzQ0FBc0M7QUFDdEMsTUFBTTtBQUVOLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzFDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRS9DLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRTtJQUN2QyxFQUFFLENBQUMsd0JBQXdCLEVBQUU7UUFDekIsSUFBSSxZQUFZLEdBQUcsSUFBSSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7VGVzdEJlZCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuLy8gaW1wb3J0IHtJdGVtc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbi8vIC8vIGltcG9ydCB7SXRlbXNDb21wb25lbnR9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50Jztcbi8vXG4vLyBkZXNjcmliZSgnYSBwcm9kdWN0LWRldGFpbCBjb21wb25lbnQnLCAoKSA9PiB7XG4vLyAgICAgbGV0IGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQ7XG4vLyB9KTtcbi8vIGJlZm9yZUVhY2goKCkgPT4ge1xuLy8gICAgIFRlc3RCZWQuY29u76yBZ3VyZVRlc3RpbmdNb2R1bGUoe3Byb3ZpZGVyczogW0l0ZW1zQ29tcG9uZW50XX0pO1xuLy8gfSk7XG4vLyBiZWZvcmVFYWNoKGluamVjdChbSXRlbXNDb21wb25lbnRdLCAoSXRlbXNDb21wb25lbnQpID0+IHtcbi8vICAgICBjb21wb25lbnQgPSBJdGVtc0NvbXBvbmVudDtcbi8vIH0pKTtcbi8vIFRlc3RpdCgnc2hvdWxkIGhhdmUgYW4gaW5zdGFuY2UnLCAoKSA9PiB7XG4vLyAgICAgZXhwZWN0KGNvbXBvbmVudCkudG9CZURl76yBbmVkKCk7XG4vLyB9KTtcblxudmFyIHJlZmxlY3QgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbnZhciBjb21wb25lbnQgPSByZXF1aXJlKFwifi9hcHAvYXBwLmNvbXBvbmVudFwiKTtcblxuZGVzY3JpYmUoXCJUZXN0cyBmb3IgYXBwL2FwcC5jb21wb25lbnQudHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgaXQoXCJWZXJpZnkgZGVmYXVsdCBtZXNzYWdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXBwQ29tcG9uZW50ID0gbmV3IGNvbXBvbmVudC5BcHBDb21wb25lbnQoKTtcbiAgICAgICAgZXhwZWN0KGFwcENvbXBvbmVudC5tZXNzYWdlKS50b0JlKFwiMTYgdGFwcyBsZWZ0XCIpO1xuICAgIH0pO1xufSk7XG4iXX0=