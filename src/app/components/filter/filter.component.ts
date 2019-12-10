import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent {
  minValue = 0;
  maxValue = 1000;
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
}
