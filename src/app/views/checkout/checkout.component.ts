import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IProduct } from 'src/app/components/product/product.interface';
import { RemoveFromCart } from 'src/app/store/actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  checkoutProducts: Array<IProduct> = [];

  constructor(
    private store: Store<any>
  ) {
    this.store.pipe(select('shoping')).subscribe((data) => {
      const products = data.cart;
      const uniqeProductIds = products.reduce((obj, v) => {
        obj[v.id] = (obj[v.id] || 0) + 1;
        return obj;
      }, {});
      const flags = [];
      const output = [];
      const l = products.length;
      let i: number;
      for (i = 0; i < l; i++) {
        if (flags[products[i].id]) {
          continue;
        }
        flags[products[i].id] = true;
        output.push(products[i]);
      }

      output.forEach((e: IProduct) => {
        for (const key in uniqeProductIds) {
          if (parseInt(key, 10) === e.id) {
            e.quantity = uniqeProductIds[key];
          }
        }
      });
      this.checkoutProducts = output;
    });
  }

  removeFromCart(item: IProduct) {
    this.store.dispatch(new RemoveFromCart(item));
  }

  get totalPrice(): number {
    return this.checkoutProducts.reduce((prev, cur) => {
      return prev + (cur.price * cur.quantity);
    }, 0);
  }

  get discount(): number {
    return this.checkoutProducts.reduce((prev, cur) => {
      return prev + (cur.discount * cur.quantity);
    }, 0);
  }

  ngOnInit() { }
}
