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
      this.cart = data.cart;
    });
  }

  cart: IProduct[] = [];
  ngOnInit() { }
}
