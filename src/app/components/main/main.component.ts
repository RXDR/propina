import { Component, OnInit } from '@angular/core';
import { Auth,getAuth,onAuthStateChanged,signOut, } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
name:any;
formReg?: any;
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
          // ...
          console.log(uid)
        } else {
          // User is signed out
          // ...
        }
      });

     }

  ngOnInit() {
this.buildform();
    
  }
  buildform(){
    this.formReg = new FormGroup({
      identificacion: new FormControl(),
      cargo: new FormControl()
    })
  }
  
  logout() {
    this.router.navigate(['/login']);
    alert('si')
    return signOut(this.auth) 
    
  }
  onSubmit() {
    console.log(this.formReg?.value)
  }
  
}
