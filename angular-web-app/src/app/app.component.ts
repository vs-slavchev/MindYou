import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
        title = 'angular-web-app';
        show :boolean;
        tokenID:string;

        constructor(){
          var config = {
            apiKey: "AIzaSyB2wYFZ2ySNN76SLspJfWQw_Iz9lMo-wzc",
            authDomain: "mindyou-ab867.firebaseapp.com",
            databaseURL: "https://mindyou-ab867.firebaseio.com",
            projectId: "mindyou-ab867",
            storageBucket: "mindyou-ab867.appspot.com",
            messagingSenderId: "1030568896261"
        };

        firebase.initializeApp(config);
     
      firebase.auth().onAuthStateChanged((user) =>{
        if (user) {
          // User is signed in.
          this.show=true;
          console.log("USer logged in");
        } else {
          // No user is signed in.
          this.show=false;
          console.log("user not logged in");
        }
      });

 }

 LogOut(){
  firebase.auth().signOut();
 }


}
