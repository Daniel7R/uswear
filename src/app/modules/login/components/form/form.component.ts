import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {FloatLabelModule} from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import {PasswordModule} from 'primeng/password'
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { of, switchMap } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { ADMINS } from '../../../../admin.config';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, RouterModule,  ButtonModule, FloatLabelModule,InputTextModule, MessagesModule, PasswordModule,ToastModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [AuthService, MessageService]
})
export class FormComponent {
  username: string ="";
  password: string ="";

  constructor( private _authService: AuthService, private _msgService: MessageService, private _router: Router){}

  login(){
    try{
      this._authService.login(this.username, this.password).pipe(
        switchMap((response )=> {

          this._msgService.add({ severity: 'info', detail: "Sesión iniciada" })
          localStorage.setItem("user", response);
          return of([])
        })
      ).subscribe(response=> {
        localStorage.setItem("user", JSON.stringify(this._authService.getCurrentUser()));
        if(ADMINS.includes(this.username)){
          this._router.navigate([`/admin`])
          return
        }
        this._router.navigate([`/`])
      }, error=> {
        console.log(error);
        
        this._msgService.add({ severity: 'error', summary: 'Error', detail: error['message'] })
      });
    } catch(error:any){
      console.log(error);
    }
  }

  loginGoogle(){
    try{

      this._authService.loginWithGoogle().pipe(
        switchMap(response => {
          this._msgService.add({ severity: 'info', detail: "Sesión iniciada" })
          localStorage.setItem("user", response);
          return of([])
        })
      ).subscribe(response => {
        localStorage.setItem("user", JSON.stringify(this._authService.getCurrentUser()));
        if(ADMINS.includes(this.username)){
          this._router.navigate([`/admin`])
          return
        }
        this._router.navigate([`/`])
      }, error => {
        this._msgService.add({severity: 'error', detail: error})
      })
    } catch(ex: any){
      console.log(ex);
      
    }
  }
  loginFacebook(){
    this._authService.loginWithGoogle().subscribe(response => {
      console.log(response);
    }, error => {
      this._msgService.add({severity: 'error', detail: error})
    })
  }
  
}
