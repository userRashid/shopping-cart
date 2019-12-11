import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DoSorting } from 'src/app/store/actions';
import { SortBy } from './sortby.constant';
import { FormGroup, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.scss']
})
export class SortByComponent implements OnInit {

  private sortBy: string;

  radioSelected: string;
  SortBy = SortBy;
  userForm: FormGroup;

  constructor(
    private store: Store<any>
  ) {
    this.store.select('shoping').subscribe((d) => {
      this.sortBy = d.sorting;
    });

    this.userForm = new FormGroup({
      sortOption: new FormControl()
    });
  }

  doSorting(sortBy?: string): void {
    const sorting = sortBy ? sortBy : this.userForm.value.sortOption;
    this.store.dispatch(new DoSorting(sorting));
    $('#sortBy').modal('hide');
  }

  isCurretSorting(sortBy: string): boolean {
    return sortBy === this.sortBy;
  }

  ngOnInit(): void { }
}
