import {HttpHeaders} from "@angular/common/http";
import {AppSettings} from "~/app/app-settings";

export class Headers {

    static getAuthTokenHeaders() {
        return {headers: new HttpHeaders(
            {'Content-Type': 'application/json',
                'Authorization': `${AppSettings.TOKEN}`,
                'Csrf-Token': "nocheck"})};
    }
    static getJsonHeaders() {
        return {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    }
}
