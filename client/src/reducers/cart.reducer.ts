import { GET_CART } from "../actions/cart.actions";

const initialState = {};


export default function productsReducer(state = initialState, action:any) {
    switch(action.type) {
        case GET_CART: 
            return action.payload
        default:
            if (localStorage.cart) {
                return JSON.parse(localStorage.cart)
            } 
            else if (!localStorage.cart) {
                return state;
            }
    }
}