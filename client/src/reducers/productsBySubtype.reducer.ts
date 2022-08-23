import { GET_PRODUCTSBYSUBTYPE } from "../actions/products.actions";

const initialState = {};

export default function productsBySubtypeReducer(state = initialState, action:any) {
    switch(action.type) {
        case GET_PRODUCTSBYSUBTYPE: 
            return action.payload
        default:
            return state;
    }
}