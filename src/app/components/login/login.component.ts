import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Auth,signOut, } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private auth:Auth,
    private userService: UserService,
    private router: Router
  ) { 
      this.formLogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
    }

    
  
  ngOnInit() {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => console.log(error));
  }

  logout() {
    return signOut(this.auth) 
    
  }
  loginWithGoogle() {
    this.userService.loginGoogle()
      .then(() => this.router.navigate(['/main']))
      .catch((e) => console.log(e.message));
  }
}
