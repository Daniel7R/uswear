import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_PRODUCT } from './reducers/product/product.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private store= inject(Store);
  count$: Observable<number>;

  constructor(){
    this.count$= this.store.select('product');
  }

  AddProduct(){
    this.store.dispatch(ADD_PRODUCT({item: 1}))
  }
}
