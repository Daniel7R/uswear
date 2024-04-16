import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';

import { Product } from '../../interfaces/produc.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ CommonModule,ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductService]
})
export class ProductsComponent  implements OnInit{
  products: Product[]| undefined;
  constructor(private _productService: ProductService){}

  ngOnInit(): void {
    this.products=this._productService.getProductsData();
    console.log(this.products);
    
  }

}
