import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

}
