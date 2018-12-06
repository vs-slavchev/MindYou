import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _router:Router) {
    //   var config = {
    //       apiKey: "AIzaSyB2wYFZ2ySNN76SLspJfWQw_Iz9lMo-wzc",
    //       authDomain: "mindyou-ab867.firebaseapp.com",
    //       databaseURL: "https://mindyou-ab867.firebaseio.com",
    //       projectId: "mindyou-ab867",
    //       storageBucket: "mindyou-ab867.appspot.com",
    //       messagingSenderId: "1030568896261"
    //   };
    //   firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(function (user) {
          if (user) {

              // User is signed in.
              var myEl = document.querySelector('#image');
              //myEl.src = user.photoURL;

              var fbName = document.querySelector('#name');
              fbName.innerHTML = user.displayName;

              var fbId= document.querySelector('#fbid');
              fbId.innerHTML=user.uid;

              var Email= document.querySelector('#userEmail');
              Email.innerHTML=user.email;

              var fbName2=document.querySelector('#name2');
              fbName2.innerHTML=user.displayName;

              // var phoneNr=document.querySelector('phoneNumber');
              // phoneNr.innerHTML=user.phoneNumber;
          } else {
              // No user is signed in.
              console.log('asd2');
          }
      });

      
  }
  
  LogOut(){
    firebase.auth().signOut();
    this._router.navigate(['/']);
  }
  ngOnInit() {
  }

}
