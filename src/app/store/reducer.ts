import { Filter } from './../components/filter/filter.model';
import { SortBy } from './../components/sortby/sortby.constant';
import { ActionsUnion, ActionTypes } from './actions';

export const initialState = {
  items: [],
  cart: [],
  sorting: SortBy.HIGH_LOW,
  filter: ''
};

export function ShopingReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.DoSorting:
      return {
        ...state,
        sorting: action.payload
      };

    case ActionTypes.DoFilter:
      return {
        ...state,
        filter: action.payload
      };

    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== action.payload.id)]
      };

    default:
      return state;
  }
}
