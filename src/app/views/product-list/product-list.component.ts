import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

declare var $: any;

import { SortBy } from './../../components/sortby/sortby.constant';
import { IProduct } from 'src/app/components/product/product.interface';
import { GetItems, DoFilter } from 'src/app/store/actions';
import { Filter } from 'src/app/components/filter/filter.model';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/components/search/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Array<IProduct> = [];
  subscription: Subscription;
  searchQuery = '';

  private filterValues: Filter;
  private productClone = [];

  constructor(
    private store: Store<any>,
    private searchService: SearchService
  ) {
    this.store.select('shoping').subscribe((d) => {
      this.products = this.sortProduct(d.items, d.sorting);
      if (d.filter !== '') {
        this.products = this.products.filter((item: IProduct) => {
          return item.price <= d.filter.max && item.price >= d.filter.min;
        });
      }
      this.productClone = JSON.parse(JSON.stringify(this.products));
    });

    this.subscription = this.searchService.getSearch().subscribe(data => {
      const filterText = data.query;
      this.products = this.productClone ? this.productClone.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
