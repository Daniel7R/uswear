import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import {InputTextModule } from 'primeng/inputtext'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from '../../services/layout-service';
import { AuthService } from '../../../modules/login/services/auth.service';
import { SessionService } from '../../../core/services/session.service';
import { Router, RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, InputGroupModule, InputGroupAddonModule, ButtonModule, InputTextModule, RouterModule, ToastModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [SessionService, MessageService]
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  isLogged: boolean=false
  constructor(public layoutService: LayoutService, private _router: Router, private _sessionService: SessionService, private _messageService: MessageService) { }

  ngOnInit(){
    let user= this._sessionService.getCurrentSession()
    console.log(user);
    
    if(user !== null && user !== undefined){
      this.isLogged=true
    }
  }

  closeSession(){
    try{
      this._sessionService.closeSession();
      this.isLogged=false;
      this._messageService.add({severity: "info", detail: "Sesión cerrada"});
      this._router.navigate([`/`])
    }catch(ex:any){
      
      this._messageService.add({severity: "error", detail: ex.toString()});
    }
  }
}
