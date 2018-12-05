import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  private httpObject;
  constructor(private router:Router, private http:HttpClient) {
      //console.log("This is the http"+http);
      this.httpObject = http;
      //console.log("2222"+this.httpObject);
  }

  private curl:string ='http://62.108.10.166:9000/users/create';

  LogIn(){
      var provider=new firebase.auth.FacebookAuthProvider();
      var config = {
          apiKey: "AIzaSyB2wYFZ2ySNN76SLspJfWQw_Iz9lMo-wzc",
          authDomain: "mindyou-ab867.firebaseapp.com",
          databaseURL: "https://mindyou-ab867.firebaseio.com",
          projectId: "mindyou-ab867",
          storageBucket: "mindyou-ab867.appspot.com",
          messagingSenderId: "1030568896261"
      };

      firebase.initializeApp(config);

      firebase.auth().signInWithPopup(provider).then((result)=> {
          JSON.stringify(result);
          var user = result.user;
          console.log(user);
            
           })   
      .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
      });
        
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            firebase.auth().currentUser.getIdToken().then((data)=>{
               // console.log(data);
               this.router.navigate(['/profile']);
                let datau={
                    "id": data,
                    "name":firebase.auth().currentUser.displayName
                };
                //console.log(this.httpObject);
                this.httpObject.post('http://62.108.10.166:9000/users/create',datau, httpOptions).subscribe(HttpResponse=>console.log(HttpResponse));
                
            })
          
        } else {
            console.log('onAuthStateChanged else')
        }
})

//       firebase.auth().currentUser.getIdToken(true).then((idToken)=>{
//         let data={
//             "id": idToken,
//             "name":firebase.auth().currentUser.displayName
//         };
//         this.http.post(this.curl,data, httpOptions).subscribe();
//     }).catch(function(error) {
//         console.log("didnt work");
//         console.log(this.curl)
        
//     }

  
// )



}
    LogOut(){
      firebase.auth().signOut();
      console.log("sucess");

    }
  ngOnInit() {
  }

}
