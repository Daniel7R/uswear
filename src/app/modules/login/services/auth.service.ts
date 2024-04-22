import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile, 
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  User,
  FacebookAuthProvider
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _firabaseAuth= inject(Auth)
  constructor() { }

  login(username: string, password: string): Observable<any>{
    const promise= signInWithEmailAndPassword(this._firabaseAuth,username, password).then(response => {
      console.log(response);
      
    })
    return from(promise)
  }

  getCurrentUser(){
    return this._firabaseAuth.currentUser;
  }
  loginWithGoogle(){
    const promise=  signInWithPopup(this._firabaseAuth, new GoogleAuthProvider()).then(response => {
      console.log(response);
      
    })

   return from(promise);
  }
  loginWithFacebook(){
    const promise=  signInWithPopup(this._firabaseAuth, new FacebookAuthProvider()).then(response => {
      console.log(response);
    })

   return from(promise);
  }

  async logout(){
    const promise= signOut(this._firabaseAuth).then(
      response => {
        console.log(response);
      }
    )
    return from(promise);
  }

  signup(email: string, username:string,password: string): Observable<void> {
    const promise=  createUserWithEmailAndPassword(this._firabaseAuth,email, password).then(response=> updateProfile(response.user,{displayName: username} ));

    return from(promise)
  }
}
