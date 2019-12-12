import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/components/product/product.interface';

@Component({
  selector: 'app-add-more',
  templateUrl: './add-more.component.html',
  styleUrls: ['./add-more.scss']
})
export class AddMoreComponent implements OnInit {

  quantity: number;

  @Input() product: IProduct;
  @Output() qantityChange = new EventEmitter<IProduct>();

  remove(): void {
    this.quantity--;
    this.product.quantity = this.quantity;
    this.qantityChange.emit(this.product);
  }

  add(): void {
    this.quantity++;
    this.product.quantity = this.quantity;
    this.qantityChange.emit(this.product);
  }

  ngOnInit(): void {
    this.quantity = this.product.quantity;
  }
}
