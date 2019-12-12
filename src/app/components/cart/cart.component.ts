import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IProduct } from '../product/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
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
      this.cart = output;
    });
  }

  cart: IProduct[] = [];

  get totalProducts(): number {
    return this.cart.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0);
  }

  ngOnInit() { }
}
