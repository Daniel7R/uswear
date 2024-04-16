import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel'
import { Product } from '../../interfaces/produc.interface';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero-carrousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule ],
  templateUrl: './hero-carrousel.component.html',
  styleUrl: './hero-carrousel.component.scss',
  providers: [ProductService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroCarrouselComponent implements OnInit {
  products: Product[] | undefined=[];
  responsiveOptions: any[] | undefined;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProductsSmall().then((products) => {
      this.products = products;
      console.log(products);
      
    });
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return ''
    }
  }
}
