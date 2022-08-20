import { GET_PRODUCTBYTYPE } from "../actions/products.actions";


const initialState = {};

export default function productsReducer(state = initialState, action:any) {
    switch(action.type) {
        case GET_PRODUCTBYTYPE:
            return action.payload
        default:
            return state;
    }
}