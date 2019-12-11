import { IProduct } from 'src/app/components/product/product.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-more',
  templateUrl: './add-more.component.html',
  styleUrls: ['./add-more.scss']
})
export class AddMoreComponent implements OnInit {

  quantity: number;

  @Input() product: IProduct;

  remove(): void {
    this.quantity--;
  }

  add(): void {
    this.quantity++;
  }

  ngOnInit(): void {
    this.quantity = this.product.quantity;
  }
}
