import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

}
