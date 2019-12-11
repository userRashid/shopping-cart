import { Action } from '@ngrx/store';
import { IProduct } from '../components/product/product.interface';
import { Filter } from './../components/filter/filter.model';

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
  DoSorting = '[Products] Do Sorting',
  DoFilter = '[Products] Do Filter'
}

export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: IProduct) { }
}

export class DoSorting implements Action {
  readonly type = ActionTypes.DoSorting;

  constructor(public payload: string) { }
}

export class DoFilter implements Action {
  readonly type = ActionTypes.DoFilter;

  constructor(public payload: Filter) { }
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: IProduct) { }
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Array<IProduct>) { }
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems | DoSorting | DoFilter;
