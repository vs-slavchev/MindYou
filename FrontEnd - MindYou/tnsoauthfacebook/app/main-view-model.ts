import { Observable } from 'data/observable';
import * as tnsOAuthModule from 'nativescript-oauth';
export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        tnsOAuthModule
            .ensureValidToken()
            .then((token: string) => {
                console.log("token: " + token);
            })
            .catch(er => {
                //do something with the error
            });
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
