"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("ui/dialogs");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.isLogin = true;
        console.log("This Message print from LoginComponent's constructor..!");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (email, pass) {
        console.log(email + " " + pass);
        if (this.isLogin) {
            this.login();
        }
        else {
            this.signIn();
        }
    };
    LoginComponent.prototype.login = function () {
        this.routerExtensions.navigate(['/items'], {
            clearHistory: true,
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
        console.log("Login Successfully..!");
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        var options = {
            title: "Signin Success",
            message: "You Successfully signed in with AuxoSample",
            okButtonText: "OK"
        };
        dialogs_1.alert(options).then(function () {
            _this.isLogin = !_this.isLogin;
            console.log("Signin Successfullly..!");
        });
    };
    LoginComponent.prototype.ifNew = function () {
        this.isLogin = !this.isLogin;
    };
    LoginComponent.prototype.forgotPassword = function () {
        console.log("todo...");
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxzQ0FBb0U7QUFPcEU7SUFNSSx3QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKdEQsWUFBTyxHQUFZLElBQUksQ0FBQztRQUtwQixPQUFPLENBQUMsR0FBRyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEtBQUssRUFBRSxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFDdEMsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBV0M7UUFWRyxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLDRDQUE0QztZQUNyRCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDO1FBRUYsZUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBdERRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBT3dDLHlCQUFnQjtPQU43QyxjQUFjLENBdUQxQjtJQUFELHFCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYWxlcnQsIHByb21wdCwgUHJvbXB0UmVzdWx0LCBpbnB1dFR5cGUgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpc0xvZ2luOiBib29sZWFuID0gdHJ1ZTtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIE1lc3NhZ2UgcHJpbnQgZnJvbSBMb2dpbkNvbXBvbmVudCdzIGNvbnN0cnVjdG9yLi4hXCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgc3VibWl0KGVtYWlsLCBwYXNzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsK1wiIFwiK3Bhc3MpO1xuICAgICAgICBpZih0aGlzLmlzTG9naW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNpZ25JbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9pdGVtcyddLHtcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBTdWNjZXNzZnVsbHkuLiFcIik7XG4gICAgfVxuXG4gICAgc2lnbkluKCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlNpZ25pbiBTdWNjZXNzXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBTdWNjZXNzZnVsbHkgc2lnbmVkIGluIHdpdGggQXV4b1NhbXBsZVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfTtcblxuICAgICAgICBhbGVydChvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9ICEgdGhpcy5pc0xvZ2luO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaWduaW4gU3VjY2Vzc2Z1bGxseS4uIVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWZOZXcoKSB7XG4gICAgICAgIHRoaXMuaXNMb2dpbiA9ICEgdGhpcy5pc0xvZ2luO1xuICAgIH1cblxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRvZG8uLi5cIik7XG4gICAgfVxufSJdfQ==