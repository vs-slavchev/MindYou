"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Dialogs = require("ui/dialogs");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
var Toast = require("nativescript-toast");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.input = {
            "id": "123",
            "title": "",
            "body": ""
        };
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsb0NBQXNDO0FBQ3RDLHFGQUFxRTtBQUNyRSwwQ0FBNEM7QUFRNUM7SUFJSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ04sQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDSSxxREFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFBLGdCQUFnQjtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLE9BQU8sRUFBRSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsRUFBRTtvQkFDckMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLEtBQUs7b0JBQ3BDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJO2dCQUNsQyxZQUFZLEVBQUUsWUFBWTthQUM3QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQUEsaUJBZUM7UUFkRyxxREFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDL0MsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDVCxxREFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDekIsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDakIsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzt3QkFDdkIsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTt3QkFDckIsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7cUJBQ25ELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDTCxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JELENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeENRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7O09BQ1csWUFBWSxDQTBDeEI7SUFBRCxtQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7TG9jYWxOb3RpZmljYXRpb25zfSAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBpbnB1dDogYW55O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0ge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMTIzXCIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJcIixcclxuICAgICAgICAgICAgXCJib2R5XCI6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhub3RpZmljYXRpb25EYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIERpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vdGlmaWNhdGlvbiByZWNlaXZlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSUQ6IFwiICsgbm90aWZpY2F0aW9uRGF0YS5pZCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5UaXRsZTogXCIgKyBub3RpZmljYXRpb25EYXRhLnRpdGxlK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuQm9keTogXCIgKyBub3RpZmljYXRpb25EYXRhLmJvZHksXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkV4Y2VsbGVudCFcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY2hlZHVsZSgpIHtcclxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICBpZihncmFudGVkKSB7XHJcbiAgICAgICAgICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pbnB1dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5pbnB1dC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmlucHV0LmJvZHksXHJcbiAgICAgICAgICAgICAgICAgICAgYXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDEwICogMTAwMCkpXHJcbiAgICAgICAgICAgICAgICB9XSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkIVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19