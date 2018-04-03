import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appli blog';
  constructor(){
    const config = {
      apiKey: "AIzaSyBmbH76UFXP-CXkFFHkkjdjXEhHiyja2SM",
      authDomain: "posts-opcr.firebaseapp.com",
      databaseURL: "https://posts-opcr.firebaseio.com",
      projectId: "posts-opcr",
      storageBucket: "posts-opcr.appspot.com",
      messagingSenderId: "420120874695"
    };
    firebase.initializeApp(config);
  }
}
