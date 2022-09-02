import { Component, OnInit } from '@angular/core';
import { firebaseApp$ } from '@angular/fire/app';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
name:any;
photo:any;
constructor( private auth:Auth,
  private userService: UserService,
  private router: Router) {

    this.auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.displayName;
        this.name = uid;
        const photoURL = user.photoURL;
        this.photo=photoURL;
        // ...
        console.log(uid)
      } else {
        // User is signed out
        // ...
      }
    });

   }

   
  ngOnInit() {
  }

  logout() {
    
    signOut(this.auth) 
    
    window.location.reload()
  

  }
}
