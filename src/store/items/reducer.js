import produce from 'immer';
import { ITEM_ADDED, ITEM_REMOVED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {

  // Using Immer
  if (action.type === ITEM_ADDED) {
    return produce(state, (draftState) => {
      const item = { uuid: id++, quantity: 1, ...action.payload };
      draftState.push(item);
    })
  }

  /*
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    return [...state, item];
  }
  */

  if (action.type === ITEM_REMOVED) {
    return state.filter(item => item.uuid !== action.payload.uuid);
  }

  // Using Immer
  if (action.type === ITEM_PRICE_UPDATED) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid);
      item.price = parseInt(action.payload.price, 10);
    });
  }
/*
  /*
  if (action.type === ITEM_PRICE_UPDATED) {
    return state.map(item => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, price: action.payload.price };
      }
      return item;
    });
  }
  */

  // Using Immer
  if (action.type === ITEM_QUANTITY_UPDATED) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid);
      item.quantity = parseInt(action.payload.quantity, 10);
    });
  }

  /*
  if (action.type === ITEM_QUANTITY_UPDATED) {
    return state.map(item => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, quantity: action.payload.quantity };
      }
      return item;
    });
  }
  */

  return state;
};

export default reducer;
