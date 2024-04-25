import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

import { Store, select } from '@ngrx/store';
import { selectProducts } from '../../../../reducers/product/product.selector';
import { ProductToCart } from '../../../../shared/models/product.interface';
import { map } from 'rxjs';
import { CalculateSubtotal } from '../../../../shared/helpers/calculate';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-grid-container',
  standalone: true,
  imports: [CommonModule, FormsModule,DividerModule, ButtonModule, InputTextModule, ToastModule],
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.scss',
  providers:[MessageService]
})
export class GridContainerComponent {
  
  store= inject(Store);

  phone: string=""
  address: string=""
  neighborhood: string=""

  productsState$= this.store.pipe(select(selectProducts))
  products: ProductToCart[]=[]

  subtotal=0;
  total=0;
  sendingCost=15000;

  constructor(private _messageService: MessageService){}

  ngOnInit(): void {
    this.cartSuscription()
  }

  cartSuscription(){
    this.productsState$.pipe(map(response=> {
      this.products=response;
      this.subtotal=CalculateSubtotal(this.products)
      if(response.length>0){
        this.total=this.subtotal+ this.sendingCost
      }

    })).subscribe()
  }

  handleSubmit(){
    if(this.products.length=== 0){
      this._messageService.add({severity: 'warn', detail: `No tienes productos para poder realizar una orden`})
      return
    }
  }

}
