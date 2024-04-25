import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductToCart } from '../../../../shared/models/product.interface';

import { SessionService } from '../../../../core/services/session.service';

import { ADD_PRODUCT } from '../../../../reducers/product/product.actions';

import { Store, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Observable, map } from 'rxjs';
import { selectProducts } from '../../../../reducers/product/product.selector';
// import { AppState } from 'ruta/a/tu/app-state';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, ToastModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers:[SessionService, MessageService]
})
export class ProductComponent  {
  @Input() product: ProductToCart | undefined;
  @Input() session:  any;
  private PHONE = '3052282432';
  private LINK: string = ``;

  store=inject(Store);
  
  productsCart$: Observable<ProductToCart[]> = this.store.pipe(select(selectProducts));
  productsInCart: ProductToCart[] = []
  
  constructor(private _messageService: MessageService) {
    this.productsCart()
  }

  productsCart(){
    this.productsCart$.pipe(map(response => {
      console.log(response);
      this.productsInCart = response

    })).subscribe()
  }


  openingWhatsapp() {
    if (this.product !== undefined) {
      this.LINK = `https://wa.me/${this.PHONE}?text=Hola, me gustaría saber más sobre ${this.product.productName}`
      window.open(this.LINK, `_blank`)
    }
  }

  addFavorite() {
    
    if (this.session!== null && this.session!== undefined && this.product !== undefined) {
      console.log(`Agregadno ${this.product.productName} a favoritos`);
    }else {
      this._messageService.add({severity: `warn`, detail: `Inicia sesión antes de añadir ${this.product?.productName} a favoritos`})
    }
  }

  addToCart() {
    if(this.product?.inCart===true){
      this._messageService.add({severity: 'warn', detail: `Este producto ya se encuentra en el carro de compras`})
      return
    }
    console.log(this.session);
    
    if (this.session!== null && this.session!== undefined && this.product !== undefined) {
        // this.product.inCart=true
      this.store.dispatch(ADD_PRODUCT({item: this.product}))
      console.log(`Agregadno ${this.product.productName} a carrito`);
    }else {
      this._messageService.add({severity: `warn`, detail: `Inicia sesión antes de añadir ${this.product?.productName} al carrito`})
    }
  }
   
  }
