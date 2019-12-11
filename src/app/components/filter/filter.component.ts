import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { Options, ChangeContext } from 'ng5-slider';
import { Filter } from './filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent {

  filterValue: Filter;
  minValue = 0;
  maxValue = 1000;

  @Output() applyFilterEvent = new EventEmitter<Filter>();

  constructor(
    private store: Store<any>
  ) {
    this.store.select('shoping').subscribe((d) => {
      if (d.filter !== '') {
        this.maxValue = d.filter.max;
        this.minValue = d.filter.min;
      }
    });
  }

  options: Options = {
    floor: 0,
    ceil: 1000,
    step: 1,
    minRange: 0,
    maxRange: 1000,
    translate: (value: number): string => {
      return '<i class="fa fa-inr" style="font-size:14px; margin-right:4px;"></i>' + value;
    }
  };

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.filterValue = new Filter();
    this.filterValue.min = changeContext.value;
    this.filterValue.max = changeContext.highValue;
    this.applyFilterEvent.emit(this.filterValue);
  }
}
