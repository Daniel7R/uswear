import { Component, Input, LOCALE_ID } from '@angular/core';

import { CardModule } from 'primeng/card'
import { Product } from '../../interfaces/produc.interface';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ProductInventory } from '../../../../shared/models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: ProductInventory | undefined;
  private PHONE = '3052282432';
  private LINK: string = ``

  openingWhatsapp() {
    if (this.product !== undefined) {
      this.LINK = `https://wa.me/${this.PHONE}?text=Hola, me gustaría saber más sobre ${this.product.productName}`
      window.open(this.LINK, `_blank`)
    }
  }

  addFavorite() {
    if (this.product !== undefined) {
      console.log(`Agregadno ${this.product.productName} a favoritos`);
    }
  }

  addToCart() {
    if (this.product !== undefined) {
      console.log(`Agregadno ${this.product.productName} a carrito`);
    }
  }
}
