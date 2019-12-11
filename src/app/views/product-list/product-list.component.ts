import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

declare var $: any;

import { SortBy } from './../../components/sortby/sortby.constant';
import { IProduct } from 'src/app/components/product/product.interface';
import { GetItems, DoFilter } from 'src/app/store/actions';
import { Filter } from 'src/app/components/filter/filter.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: Array<IProduct> = [];

  private filterValues: Filter;

  constructor(
    private store: Store<any>
  ) {
    this.store.select('shoping').subscribe((d) => {
      this.products = this.sortProduct(d.items, d.sorting);
      if (d.filter !== '') {
        this.products = this.products.filter((item: IProduct) => {
          return item.price <= d.filter.max && item.price >= d.filter.min;
        });
      }
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

  onApplyFilter($event) {
    this.filterValues = $event;
    $('#filter').modal('hide');
  }

  applyFilter() {
    this.store.dispatch(new DoFilter(this.filterValues));
    this.products = this.products.filter((item: IProduct) => {
      return item.price <= this.filterValues.max && item.price >= this.filterValues.min;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }
}
