import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IProduct } from './product.interface';
import { AddToCart } from 'src/app/store/actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  inCart = false;

  @Input() item: IProduct;

  constructor(
    private store: Store<{ items: []; cart: [] }>
  ) { }

  addToCart(item: IProduct) {
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  ngOnInit() { }
}
