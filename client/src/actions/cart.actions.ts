export const GET_CART = "GET_CART";

export const getCart = () => {
    return (dispatch: any) => {
        if (localStorage.cart) dispatch({ type: GET_CART, payload: JSON.parse(localStorage.cart)})        
        else if (!localStorage.cart) dispatch({ type: GET_CART, payload: null})
    }
}