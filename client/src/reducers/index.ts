import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import cartReducer from "./cart.reducer";
import productsByTypeReducer from "./productsByType.reducer"

export default combineReducers({
    productsReducer,
    productsByTypeReducer,
    cartReducer
})