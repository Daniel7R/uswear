import { Component, Input, LOCALE_ID } from '@angular/core';

import {CardModule} from 'primeng/card'
import { Product } from '../../interfaces/produc.interface';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule,CardModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
}
