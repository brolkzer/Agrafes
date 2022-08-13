import { GET_ALLPRODUCTS } from "../actions/products.actions";

const initialState = {};

export default function productsReducer(state = initialState, action:any) {
    switch(action.type) {
        case GET_ALLPRODUCTS: 
            return action.payload
        default:
            return state;
    }
}