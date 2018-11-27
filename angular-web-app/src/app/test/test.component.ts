import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
      var config = {
          apiKey: "AIzaSyB2wYFZ2ySNN76SLspJfWQw_Iz9lMo-wzc",
          authDomain: "mindyou-ab867.firebaseapp.com",
          databaseURL: "https://mindyou-ab867.firebaseio.com",
          projectId: "mindyou-ab867",
          storageBucket: "mindyou-ab867.appspot.com",
          messagingSenderId: "1030568896261"
      };
      firebase.initializeApp(config);

      // var provider = new firebase.auth.FacebookAuthProvider();
      // firebase.auth().signInWithPopup(provider).then(function(result) {
      //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      //     var token = result.credential.accessToken;
      //     // The signed-in user info.
      //     var user = result.user;
      //     // ...
      // }).catch(function(error) {
      //     // Handle Errors here.
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     // The email of the user's account used.
      //     var email = error.email;
      //     // The firebase.auth.AuthCredential type that was used.
      //     var credential = error.credential;
      //     // ...
      // });
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              // User is signed in.
            var myEl= document.querySelector('#image');
            //myEl.src=user.photoURL;

              var fbName=document.querySelector('#name');
              fbName.innerHTML=user.displayName;
          } else {
              // No user is signed in.
              console.log('asd2');
          }
      });
  }

  ngOnInit() {
  }

}
