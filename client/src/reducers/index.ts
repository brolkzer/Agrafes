import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import cartReducer from "./cart.reducer";
import productsByTypeReducer from "./productsByType.reducer"
import productsBySubtypeReducer from "./productsBySubtype.reducer"

export default combineReducers({
    productsReducer,
    productsByTypeReducer,
    cartReducer,
    productsBySubtypeReducer
})