import { ActionsUnion, ActionTypes } from './actions';

export const initialState = {
  items: [],
  cart: [],
  sorting: ''
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
