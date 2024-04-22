import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';
import { AuthService } from '../../login/services/auth.service';

import { TabViewModule } from "primeng/tabview"
import { TableComponent } from '../components/table/table.component';
import { ProductInventory } from '../../../shared/models/product.interface';
import { StatusEnum } from '../../../shared/models/status.enum';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    TableComponent,
    TabViewModule

  ],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss',
  providers: [AuthService]
})
export class AdminProductsComponent implements OnInit {
  dataPending: ProductInventory[] = [
    {
      id: '1000',
      phoneSeller: '303200202',
      productName: 'Bamboo Watch',
      seller: 'pepito pérez',
      image: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg',
      price: 65,
      inventoryStatus: "In Inventory"

    }
  ]

  columnsPending = [
    { field: 'image', header: 'Image' },
    { field: 'productName', header: 'Nombre Producto' },
    { field: 'seller', header: 'Vendedor' },
    { field: 'seller', header: 'Teléfono' },
    { field: 'price', header: 'Precio' },
    { field: 'inventoryStatus', header: 'Estado' },
  ];
  optStatusPending=[
    StatusEnum.SOLD_OUT,StatusEnum.PENDING
  ]
  optStatusStock=[
    StatusEnum.SOLD_OUT,StatusEnum.IN_INVENTORY
  ]

  dataStock: ProductInventory[] = [
    {
      id: '1000',
      phoneSeller: '303200202',
      productName: 'Blue T Shirt',
      seller: 'pepito pérez',
      image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-t-shirt.jpg',
      price: 65,
      inventoryStatus: "Sold Out"
    }
  ]
  columnsStock = [
    { field: 'image', header: 'Image' },
    { field: 'productName', header: 'Nombre Producto' },
    { field: 'seller', header: 'Vendedor' },
    { field: 'seller', header: 'Teléfono' },
    { field: 'price', header: 'Precio' },
    { field: 'inventoryStatus', header: 'Estado' },
  ];

  dataDelivery: ProductInventory[]=[
    {
      id: '1000',
      phoneSeller: '303200202',
      productName: 'Chakra Bracelet',
      seller: 'pepito pérez',
      image: 'https://primefaces.org/cdn/primeng/images/demo/product/chakra-bracelet.jpg',
      price: 65,
      inventoryStatus: "Pending"
    }
  ]
  columnsDelivery = [
    { field: 'image', header: 'Image' },
    { field: 'productName', header: 'Nombre Producto' },
    { field: 'seller', header: 'Vendedor' },
    { field: 'seller', header: 'Teléfono' },
    { field: 'price', header: 'Precio' },
    { field: 'inventoryStatus', header: 'Estado' },
  ];

  optStatusDelivery=[
     StatusEnum.PENDING, StatusEnum.DELIVERED
  ]

  constructor(private _authService: AuthService, private _firestoreService: FirestoreService) { }

  async ngOnInit() {
    let session = this._authService.getCurrentUser()

    if (session !== undefined && session !== null) {
    
    }

    let a=(await this._firestoreService.getProducts([StatusEnum.PENDING])).subscribe(response => {
      console.log(response);
    }
    )
  }
}
