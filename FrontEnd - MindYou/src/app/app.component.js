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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsb0NBQXNDO0FBQ3RDLHFGQUFxRTtBQUNyRSwwQ0FBNEM7QUFRNUM7SUFJSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ04sQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDSSxxREFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFBLGdCQUFnQjtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLE9BQU8sRUFBRSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsRUFBRTtvQkFDckMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLEtBQUs7b0JBQ3BDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJO2dCQUNsQyxZQUFZLEVBQUUsWUFBWTthQUM3QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQUEsaUJBZUM7UUFkRyxxREFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDL0MsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDVCxxREFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDekIsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDakIsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzt3QkFDdkIsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTt3QkFDckIsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7cUJBQ25ELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDTCxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JELENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeENRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7O09BQ1csWUFBWSxDQTBDeEI7SUFBRCxtQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHtMb2NhbE5vdGlmaWNhdGlvbnN9ICBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxMjNcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgICAgIFwiYm9keVwiOiBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhub3RpZmljYXRpb25EYXRhID0+IHtcbiAgICAgICAgICAgICAgICBEaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm90aWZpY2F0aW9uIHJlY2VpdmVkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSUQ6IFwiICsgbm90aWZpY2F0aW9uRGF0YS5pZCArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuVGl0bGU6IFwiICsgbm90aWZpY2F0aW9uRGF0YS50aXRsZStcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5Cb2R5OiBcIiArIG5vdGlmaWNhdGlvbkRhdGEuYm9keSxcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkV4Y2VsbGVudCFcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY2hlZHVsZSgpIHtcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihncmFudGVkID0+IHtcbiAgICAgICAgICAgIGlmKGdyYW50ZWQpIHtcbiAgICAgICAgICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaW5wdXQuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmlucHV0LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmlucHV0LmJvZHksXG4gICAgICAgICAgICAgICAgICAgIGF0OiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICgxMCAqIDEwMDApKVxuICAgICAgICAgICAgICAgIH1dKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkIVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19