import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    //đầu vào của cái thứ 2 sẽ là đầu ra từ cái thứ nhất
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
                accumalatedQuantity + cartItem.quantity,
            0
        )

)