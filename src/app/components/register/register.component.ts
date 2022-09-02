import { Component, Injectable, Injector, OnInit } from '@angular/core';

import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
firebase?:any;
fire:any;
  formReg: FormGroup;

  constructor(
    private auth:Auth,
    private userService: UserService,
    private router: Router
  ) {
 



    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })


     
      
  }

 
  loginWithGoogle() {
    this.userService.loginGoogle()
      .then(() => this.router.navigate(['/main']))
      .catch((e) => console.log(e.message));
  }


}
