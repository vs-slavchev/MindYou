"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var tnsOAuthModule = require("nativescript-oauth");
tnsOAuthModule.login()
    .then(function () {
    console.log('logged in');
    console.dir("accessToken " + tnsOAuthModule.accessToken());
})
    .catch(function (er) {
    //do something with the error
});
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._counter = 42;
        _this.updateMessage();
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onLogOut = function () {
        tnsOAuthModule.logout().then(function () {
            console.log('logged out');
        })
            .catch(function (er) {
            //do something with the error
        });
    };
    HelloWorldModel.prototype.onTap = function () {
        tnsOAuthModule
            .ensureValidToken()
            .then(function (token) {
            console.log("token: " + token);
        })
            .catch(function (er) {
            //do something with the error
        });
    };
    HelloWorldModel.prototype.updateMessage = function () {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = this._counter + " taps left";
        }
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLG1EQUFxRDtBQUVyRCxjQUFjLENBQUMsS0FBSyxFQUFFO0tBQ2pCLElBQUksQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQUMsRUFBRTtJQUNOLDZCQUE2QjtBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUdQO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSEcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7SUFDekIsQ0FBQztJQUVELHNCQUFJLG9DQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxLQUFhO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDL0MsQ0FBQztRQUNMLENBQUM7OztPQVBBO0lBU00sa0NBQVEsR0FBZjtRQUVJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU5QixDQUFDLENBQUM7YUFDRyxLQUFLLENBQUMsVUFBQyxFQUFFO1lBQ04sNkJBQTZCO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLCtCQUFLLEdBQVo7UUFDSSxjQUFjO2FBQ1QsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxFQUFFO1lBQ0wsNkJBQTZCO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLHVDQUFhLEdBQXJCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsK0RBQStELENBQUM7UUFDbkYsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sR0FBTSxJQUFJLENBQUMsUUFBUSxlQUFZLENBQUM7UUFDaEQsQ0FBQztJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFyREQsQ0FBcUMsdUJBQVUsR0FxRDlDO0FBckRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyB0bnNPQXV0aE1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtb2F1dGgnO1xuXG50bnNPQXV0aE1vZHVsZS5sb2dpbigpXG4gICAgLnRoZW4oKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBpbicpO1xuICAgICAgICBjb25zb2xlLmRpcihcImFjY2Vzc1Rva2VuIFwiICsgdG5zT0F1dGhNb2R1bGUuYWNjZXNzVG9rZW4oKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVyKT0+e1xuICAgICAgICAvL2RvIHNvbWV0aGluZyB3aXRoIHRoZSBlcnJvclxuICAgIH0pO1xuXG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICB0aGlzLl9jb3VudGVyID0gNDI7XG4gICAgICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgbWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9tZXNzYWdlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbWVzc2FnZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9nT3V0KCl7XG5cbiAgICAgICAgdG5zT0F1dGhNb2R1bGUubG9nb3V0KCkudGhlbigoKT0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgb3V0Jyk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXIpPT57XG4gICAgICAgICAgICAgICAgLy9kbyBzb21ldGhpbmcgd2l0aCB0aGUgZXJyb3JcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdG5zT0F1dGhNb2R1bGVcbiAgICAgICAgICAgIC5lbnN1cmVWYWxpZFRva2VuKClcbiAgICAgICAgICAgIC50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbjogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgICAgICAvL2RvIHNvbWV0aGluZyB3aXRoIHRoZSBlcnJvclxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVNZXNzYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5fY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnSG9vcnJhYWF5ISBZb3UgdW5sb2NrZWQgdGhlIE5hdGl2ZVNjcmlwdCBjbGlja2VyIGFjaGlldmVtZW50ISc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLl9jb3VudGVyfSB0YXBzIGxlZnRgO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19