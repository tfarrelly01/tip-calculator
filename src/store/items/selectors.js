import { createSelector } from "reselect";
// two arguments 1) array of functions, 2) A function to pass all results to which computes new value

export const selectItem =  (state, props) => {
    return state.items.find(item => item.uuid === props.uuid);
};

export const selectItemTotal = createSelector(
    [selectItem],
    (item) => item.price * item.quantity
);

// This is good because if you changed you state tree you would only need to change this function
export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubtotal = createSelector(
    [selectItems],
    (items) => items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )
);

export const selectTipAmount = createSelector(
    [selectSubtotal, selectTipPercentage],
    (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
    [selectSubtotal, selectTipAmount],
    (subtotal, tipAmount) => subtotal + tipAmount
);