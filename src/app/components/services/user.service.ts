import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private auth:Auth) { }
 loginGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
}

register({email,password}:any){
return createUserWithEmailAndPassword(this.auth,email,password)
}

login({email,password}:any){
  return signInWithEmailAndPassword(this.auth,email,password)
}



}
