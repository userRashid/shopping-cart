import { SortBy } from './sortby.constant';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DoSorting } from 'src/app/store/actions';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.scss']
})
export class SortByComponent implements OnInit {

  private sortBy: string;

  constructor(
    private store: Store<any>
  ) {
    this.store.select('shoping').subscribe((d) => {
      this.sortBy = d.sorting;
    });
  }

  doSorting(sortBy: string): void {
    this.store.dispatch(new DoSorting(sortBy));
  }

  isCurretSorting(sortBy: string): boolean {
    return sortBy === this.sortBy;
  }

  ngOnInit(): void {
    this.store.dispatch(new DoSorting(SortBy.HIGH_LOW));
  }
}
