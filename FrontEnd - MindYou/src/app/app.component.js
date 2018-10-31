"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Dialogs = require("ui/dialogs");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
var Toast = require("nativescript-toast");
// import {Page} from "tns-core-modules/ui/page";
var application_1 = require("application");
var AppComponent = /** @class */ (function () {
    // public constructor(private page: Page) {
    function AppComponent() {
        this.activities = [
            { name: "", imageSrc: "" },
            { name: "", imageSrc: "" },
            { name: "", imageSrc: "" },
            { name: "", imageSrc: "" },
            { name: "", imageSrc: "" },
            { name: "", imageSrc: "" },
            { name: "", imageSrc: "" }
        ];
        // this.page.actionBarHidden = true;
        this.input = {
            "id": "123",
            "title": "",
            "body": ""
        };
    }
    AppComponent.prototype.onItemTap = function (args) {
    };
    AppComponent.prototype.ngOnInit = function () {
        nativescript_local_notifications_1.LocalNotifications.addOnMessageReceivedCallback(function (notificationData) {
            Dialogs.alert({
                title: "Notification received",
                message: "ID: " + notificationData.id +
                    "\nTitle: " + notificationData.title +
                    "\nBody: " + notificationData.body,
                okButtonText: "Excellent!"
            });
        });
    };
    AppComponent.prototype.schedule = function () {
        var _this = this;
        nativescript_local_notifications_1.LocalNotifications.requestPermission().then(function (granted) {
            if (granted) {
                nativescript_local_notifications_1.LocalNotifications.schedule([{
                        id: _this.input.id,
                        title: _this.input.title,
                        body: _this.input.body,
                        at: new Date(new Date().getTime() + (10 * 1000))
                    }]).then(function () {
                    Toast.makeText("Notification scheduled!").show();
                }, function (error) {
                    console.dir(error);
                });
            }
        });
    };
    AppComponent.prototype.onItemLoading = function (args) {
        if (application_1.ios) {
            var cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    };
    AppComponent.prototype.tabSelected = function (args) {
        console.log("tab selected: " + args);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsb0NBQXNDO0FBQ3RDLHFGQUFxRTtBQUNyRSwwQ0FBNEM7QUFHNUMsaURBQWlEO0FBRWpELDJDQUFrQztBQVNsQztJQWlCSSwyQ0FBMkM7SUFDM0M7UUFoQkEsZUFBVSxHQUF5QztZQUMvQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtTQUM3QixDQUFDO1FBU0Usb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ04sQ0FBQztJQWJELGdDQUFTLEdBQVQsVUFBVSxJQUFtQjtJQUM3QixDQUFDO0lBY00sK0JBQVEsR0FBZjtRQUNJLHFEQUFrQixDQUFDLDRCQUE0QixDQUFDLFVBQUEsZ0JBQWdCO1lBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsT0FBTyxFQUFFLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUNyQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsS0FBSztvQkFDcEMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLElBQUk7Z0JBQ2xDLFlBQVksRUFBRSxZQUFZO2FBQzdCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFBQSxpQkFlQztRQWRHLHFEQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUMvQyxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNULHFEQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN6QixFQUFFLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNqQixLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO3dCQUN2QixJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO3dCQUNyQixFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztxQkFDbkQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNMLEtBQUssQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckQsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBUztRQUNuQixFQUFFLENBQUMsQ0FBQyxpQkFBRyxDQUFDLENBQUMsQ0FBQztZQUNOLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyw2QkFBNkIsQ0FBQyxpQ0FBaUMsQ0FBQztRQUMxRixDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLElBQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFsRVEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzs7T0FDVyxZQUFZLENBbUV4QjtJQUFELG1CQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQge0xvY2FsTm90aWZpY2F0aW9uc30gIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5pbXBvcnQge0l0ZW1FdmVudERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuLy8gaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbmltcG9ydCB7IGlvcyB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuZGVjbGFyZSB2YXIgVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGU7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgYWN0aXZpdGllczogeyBuYW1lOiBzdHJpbmcsIGltYWdlU3JjOiBzdHJpbmcgfVtdID0gW1xuICAgICAgICB7IG5hbWU6IFwiXCIsIGltYWdlU3JjOiBcIlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJcIiwgaW1hZ2VTcmM6IFwiXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlwiLCBpbWFnZVNyYzogXCJcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiXCIsIGltYWdlU3JjOiBcIlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJcIiwgaW1hZ2VTcmM6IFwiXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlwiLCBpbWFnZVNyYzogXCJcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiXCIsIGltYWdlU3JjOiBcIlwiIH1cbiAgICBdO1xuXG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcblxuICAgIC8vIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmlucHV0ID0ge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjEyM1wiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJib2R5XCI6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5hZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKG5vdGlmaWNhdGlvbkRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIERpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOb3RpZmljYXRpb24gcmVjZWl2ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJRDogXCIgKyBub3RpZmljYXRpb25EYXRhLmlkICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5UaXRsZTogXCIgKyBub3RpZmljYXRpb25EYXRhLnRpdGxlK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbkJvZHk6IFwiICsgbm90aWZpY2F0aW9uRGF0YS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiRXhjZWxsZW50IVwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjaGVkdWxlKCkge1xuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKGdyYW50ZWQgPT4ge1xuICAgICAgICAgICAgaWYoZ3JhbnRlZCkge1xuICAgICAgICAgICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pbnB1dC5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuaW5wdXQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuaW5wdXQuYm9keSxcbiAgICAgICAgICAgICAgICAgICAgYXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDEwICogMTAwMCkpXG4gICAgICAgICAgICAgICAgfV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWQhXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JdGVtTG9hZGluZyhhcmdzOiBhbnkpIHtcbiAgICAgICAgaWYgKGlvcykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGFyZ3MuaW9zO1xuICAgICAgICAgICAgY2VsbC5zZWxlY3Rpb25TdHlsZSA9IFVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlLlVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlTm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRhYlNlbGVjdGVkKGFyZ3M6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgdGFiIHNlbGVjdGVkOiAke2FyZ3N9YCk7XG4gICAgfVxufVxuIl19