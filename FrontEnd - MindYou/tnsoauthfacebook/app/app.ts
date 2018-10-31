/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as application from 'application';
import * as tnsOAuthModule from 'nativescript-oauth';
application.run({ moduleName: 'app-root' });

var facebookInitOptions: tnsOAuthModule.ITnsOAuthOptionsFacebook = {
    clientId: "2032694106789245",
    clientSecret: "a0c2fe58394edd1b2a59f22d6f42cf03",
    scope: ["email"] //whatever other scopes you need
};
tnsOAuthModule.initFacebook(facebookInitOptions);

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
