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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdEl0ZW1Db21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0SXRlbUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWtCQSw0REFBNEQ7QUFDNUQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDM0QsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDdEQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDeEMseUJBQXlCO0FBQ3pCLDhEQUE4RDtBQUU5RCxRQUFRLENBQUMsNENBQTRDLEVBQUU7SUFDbkQsZ0RBQWdEO0lBQ2hELDREQUE0RDtJQUM1RCxnQ0FBZ0M7SUFFaEMscUJBQXFCO0lBQ3JCLEVBQUU7SUFDRixnRUFBZ0U7SUFDaEUsdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLEVBQUU7SUFDRiwyQ0FBMkM7SUFDM0MseURBQXlEO0lBQ3pELEVBQUU7SUFDRiw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLEVBQUU7SUFDRiw2Q0FBNkM7SUFDN0MsOENBQThDO0lBQzlDLEVBQUU7SUFDRixNQUFNO0lBRU4sMEVBQTBFO0lBQzFFLDZGQUE2RjtJQUM3RixpQ0FBaUM7SUFDakMsa0RBQWtEO0lBQzlDLHdEQUF3RDtJQUM1RCxNQUFNO0lBQ04sSUFBSSxjQUFjLENBQUM7SUFDbkIsVUFBVSxDQUFDO1FBQ1AsY0FBYyxHQUFHLElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHdCQUF3QixFQUFFO1FBQ3pCLDRDQUE0QztRQUM1QywyREFBMkQ7UUFDM0QscURBQXFEO1FBQ3JELGtDQUFrQztRQUNsQyxnQ0FBZ0M7UUFHaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsOERBQThEO0FBQzlELEVBQUU7QUFDRix1Q0FBdUM7QUFDdkMsMEJBQTBCO0FBQzFCLDhCQUE4QjtBQUM5QiwyREFBMkQ7QUFDM0QsVUFBVTtBQUNWLDZDQUE2QztBQUM3Qyx1RUFBdUU7QUFDdkUsVUFBVTtBQUNWLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge1Rlc3RCZWQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbi8vIGltcG9ydCB7SXRlbXNDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG4vLyAvLyBpbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudCc7XG4vL1xuLy8gZGVzY3JpYmUoJ2EgcHJvZHVjdC1kZXRhaWwgY29tcG9uZW50JywgKCkgPT4ge1xuLy8gICAgIGxldCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50O1xuLy8gfSk7XG4vLyBiZWZvcmVFYWNoKCgpID0+IHtcbi8vICAgICBUZXN0QmVkLmNvbu+sgWd1cmVUZXN0aW5nTW9kdWxlKHtwcm92aWRlcnM6IFtJdGVtc0NvbXBvbmVudF19KTtcbi8vIH0pO1xuLy8gYmVmb3JlRWFjaChpbmplY3QoW0l0ZW1zQ29tcG9uZW50XSwgKEl0ZW1zQ29tcG9uZW50KSA9PiB7XG4vLyAgICAgY29tcG9uZW50ID0gSXRlbXNDb21wb25lbnQ7XG4vLyB9KSk7XG4vLyBUZXN0aXQoJ3Nob3VsZCBoYXZlIGFuIGluc3RhbmNlJywgKCkgPT4ge1xuLy8gICAgIGV4cGVjdChjb21wb25lbnQpLnRvQmVEZe+sgW5lZCgpO1xuLy8gfSk7XG4vLyBpbXBvcnQgeyBUZXN0QmVkLCBDb21wb25lbnRGaXh0dXJlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7SXRlbXNDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0uc2VydmljZVwiO1xudmFyIHJlZmxlY3QgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbnZhciBjb21wb25lbnQgPSByZXF1aXJlKFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiKTtcbnZhciBzZXJ2aWNlID0gcmVxdWlyZShcIn4vYXBwL2hvbWUvaXRlbS9pdGVtLnNlcnZpY2VcIik7XG52YXIgcm91dGVyID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcbi8vIFJvdXRlciwgQWN0aXZhdGVkUm91dGVcbi8vIHZhciBjb21wb25lbnQgPSByZXF1aXJlKFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiKTtcblxuZGVzY3JpYmUoXCJUZXN0cyBmb3IgYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnQudHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gdmFyIGNvbXBvbmVudCA9IG5ldyBjb21wb25lbnQuSXRlbXNDb21wb25lbnQ7XG4gICAgLy8gdmFyIGZpeHR1cmUgPSBDb21wb25lbnRGaXh0dXJlPGNvbXBvbmVudC5JdGVtc0NvbXBvbmVudD47XG4gICAgLy8gdmFyIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZTtcblxuICAgIC8vIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIC8vXG4gICAgLy8gICAgIC8vIHJlZmluZSB0aGUgdGVzdCBtb2R1bGUgYnkgZGVjbGFyaW5nIHRoZSB0ZXN0IGNvbXBvbmVudFxuICAgIC8vICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgIC8vICAgICAgICAgZGVjbGFyYXRpb25zOiBbSXRlbXNDb21wb25lbnRdLFxuICAgIC8vICAgICAgICAgcHJvdmlkZXJzOiBbSXRlbVNlcnZpY2VdXG4gICAgLy8gICAgIH0pO1xuICAgIC8vXG4gICAgLy8gICAgIC8vIGNyZWF0ZSBjb21wb25lbnQgYW5kIHRlc3QgZml4dHVyZVxuICAgIC8vICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoSXRlbXNDb21wb25lbnQpO1xuICAgIC8vXG4gICAgLy8gICAgIC8vIGdldCB0ZXN0IGNvbXBvbmVudCBmcm9tIHRoZSBmaXh0dXJlXG4gICAgLy8gICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgLy9cbiAgICAvLyAgICAgLy8gVXNlclNlcnZpY2UgcHJvdmlkZWQgdG8gdGhlIFRlc3RCZWRcbiAgICAvLyAgICAgaXRlbVNlcnZpY2UgPSBUZXN0QmVkLmdldChJdGVtU2VydmljZSk7XG4gICAgLy9cbiAgICAvLyB9KTtcblxuICAgIC8vIGl0KCdjYW5Mb2dpbiByZXR1cm5zIGZhbHNlIHdoZW4gdGhlIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQnLCAoKSA9PiB7XG4gICAgLy8gICAgIHNweU9uKGl0ZW1TZXJ2aWNlLCAnZ2V0QWN0aXZpdGllcycpLmFuZC5yZXR1cm5WYWx1ZShbeydpZCc6IFwiMVwiLCAnbmFtZSc6IFwicnVubmluZ1wifV0pO1xuICAgIC8vICAgICBjb21wb25lbnQuZ2V0QWN0aXZpdGllcygpO1xuICAgIC8vICAgICBleHBlY3QoaXRlbVNlcnZpY2UuaXRlbXMubGVuZ3RoKCkpLnRvQmUoMSk7XG4gICAgICAgIC8vIGV4cGVjdChpdGVtU2VydmljZS5nZXRBY3Rpdml0aWVzKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgLy8gfSk7XG4gICAgdmFyIGl0ZW1zQ29tcG9uZW50O1xuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpdGVtc0NvbXBvbmVudCA9IG5ldyBjb21wb25lbnQuSXRlbXNDb21wb25lbnQoKTtcbiAgICB9KTtcbiAgICBpdChcIlZlcmlmeSBkZWZhdWx0IG1lc3NhZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHZhciBfcm91dGVyID0gVGVzdEJlZC5nZXQocm91dGVyLlJvdXRlcik7XG4gICAgICAgIC8vIHZhciBhY3RpdmF0ZWRSb3V0ZSA9IFRlc3RCZWQuZ2V0KHJvdXRlci5BY3RpdmF0ZWRSb3V0ZSk7XG4gICAgICAgIC8vIHZhciBpdGVtc0NvbXBvbmVudCA9IG5ldyBjb21wb25lbnQuSXRlbXNDb21wb25lbnQoXG4gICAgICAgIC8vICAgICBuZXcgc2VydmljZS5JdGVtc1NlcnZpY2UoKSxcbiAgICAgICAgLy8gICAgIF9yb3V0ZXIsIGFjdGl2YXRlZFJvdXRlKTtcblxuXG4gICAgICAgIGV4cGVjdChpdGVtc0NvbXBvbmVudC5oZWxsb1dvcmxkKCkpLnRvQmUoXCJEYXZhYWFqIVwiKTtcbiAgICB9KTtcbn0pO1xuXG4vLyB2YXIgY29tcG9uZW50ID0gcmVxdWlyZShcIn4vYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnRcIik7XG4vL1xuLy8gZGVzY3JpYmUoXCJIZWxsbyB3b3JsZFwiLCBmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgaXRlbXNDb21wb25lbnQ7XG4vLyAgICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgaXRlbXNDb21wb25lbnQgPSBuZXcgY29tcG9uZW50Lkl0ZW1zQ29tcG9uZW50KCk7XG4vLyAgICAgfSk7XG4vLyAgICAgaXQoXCJyZXR1cm5zIEhlbGxvIHdvcnJsZFwiLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICBleHBlY3QoaXRlbXNDb21wb25lbnQuaGVsbG9Xb3JsZCgpKS50b0VxdWFsKFwiSGVsbG8gd29ybGQhXCIpO1xuLy8gICAgIH0pO1xuLy8gfSk7XG4iXX0=