import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import {InputTextModule } from 'primeng/inputtext'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/layout-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, InputGroupModule, InputGroupAddonModule, ButtonModule, InputTextModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) { }
}
