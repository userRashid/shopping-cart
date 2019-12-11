import { SortBy } from './../../components/sortby/sortby.constant';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IProduct } from 'src/app/components/product/product.interface';
import { GetItems } from 'src/app/store/actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: Array<IProduct> = [];

  constructor(
    private store: Store<any>
  ) {
    this.store.select('shoping').subscribe((d) => {
      this.products = this.sortProduct(d.items, d.sorting);
    });
  }

  private sortProduct(items: Array<IProduct>, sortBy: string): Array<IProduct> {
    let condition1: number;
    let condition2: number;
    let key: string;
    if (sortBy === SortBy.HIGH_LOW) {
      condition1 = 1;
      condition2 = -1;
      key = 'price';
    } else if (sortBy === SortBy.LOW_HIGH) {
      condition1 = -1;
      condition2 = 1;
      key = 'price';
    } else if (sortBy === SortBy.DISCOUNT) {
      condition1 = 1;
      condition2 = -1;
      key = 'discount';
    }
    return items.sort((a: IProduct, b: IProduct) => {
      if (a[key] < b[key]) {
        return condition1;
      }
      if (a[key] > b[key]) {
        return condition2;
      }
      return 0;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }
}
