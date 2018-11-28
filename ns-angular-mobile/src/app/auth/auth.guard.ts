import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import {AppSettings} from "~/app/app-settings";
// import { CookieService, CookieOptions } from "angular2-cookie/core";

const firebase = require("nativescript-plugin-firebase");


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router) { }

    private getTokenFromFirebase(): string {
        firebase.getAuthToken({
            // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
            forceRefresh: false
        }).then(
            function (token) {
                console.log("Auth token retrieved: " + token);
                return AppSettings.TOKEN = token;
            },
            function (errorMessage) {
                console.log("Auth token retrieval error: " + errorMessage);
                return null;
            }
        );

        return AppSettings.TOKEN;
    }

    private getToken(): string {
        if (AppSettings.TOKEN != null) { return AppSettings.TOKEN }

        return this.getTokenFromFirebase();
    }

    private isAuthenticated(): boolean {
        return (this.getToken() != null);
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        console.log("auth guard canActivate");
        // await this.profileService.get().toPromise().then(profile => this.utils.Profile = profile);

        if (!this.isAuthenticated()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;

    }
    async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        console.log("auth guard canActivateChild");

        if (!this.isAuthenticated()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }

}
