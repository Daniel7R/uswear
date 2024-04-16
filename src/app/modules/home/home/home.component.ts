import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';
import { HeroCarrouselComponent } from '../components/hero-carrousel/hero-carrousel.component';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from '../components/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, HeroCarrouselComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
