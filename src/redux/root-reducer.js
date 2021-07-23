//combineReducers kết hợp cái reducer lại với nhau
//gộp các reducer lại với nhau bằng hàm combineReducer.
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user:userReducer,
    cart:cartReducer
})