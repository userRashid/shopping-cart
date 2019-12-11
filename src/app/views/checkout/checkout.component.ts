import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IProduct } from 'src/app/components/product/product.interface';
import { RemoveFromCart } from 'src/app/store/actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  constructor(
    private store: Store<any>
  ) {
    this.store.pipe(select('shoping')).subscribe((data) => {
      this.checkoutProducts = data.cart;
    });
  }

  checkoutProducts: Array<IProduct> = [];

  removeFromCart(item: IProduct) {
    this.store.dispatch(new RemoveFromCart(item));
  }

  get totalPrice(): number {
    return this.checkoutProducts.reduce((prev, cur) => {
      return prev + cur.price;
    }, 0);
  }

  get discount(): number {
    return this.checkoutProducts.reduce((prev, cur) => {
      return prev + cur.discount;
    }, 0);
  }

  ngOnInit() { }
}
