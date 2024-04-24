import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';

import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../../../shared/services/firestore.service';
import { ProductInventory } from '../../../../shared/models/product.interface';
import { StatusEnum } from '../../../../shared/models/status.enum';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductService, FirestoreService]
})
export class ProductsComponent implements OnInit {
  products: ProductInventory[] | undefined;
  constructor(private _productService: FirestoreService) { }

  async ngOnInit() {
    (await this._productService.getProducts([StatusEnum.IN_INVENTORY, StatusEnum.APPROVED])).subscribe(response => {
      this.products = response as ProductInventory[];
      console.log(response);
    });
  }

}
