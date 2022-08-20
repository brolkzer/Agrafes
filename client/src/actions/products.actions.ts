import axios from "axios";

export const GET_ALLPRODUCTS = "GET_ALLPRODUCTS";
export const GET_PRODUCTBYTYPE = "GET_PRODUCTBYTYPE"

export const getAllProducts = () => {
    return (dispatch: any) => {
        return axios.get("http://localhost:5000/api/products").then((res) => dispatch({ type: GET_ALLPRODUCTS, payload: res.data})).catch((error) => console.log(error))
    }
}

export const getProductByType = (type:string) => {
    return (dispatch: any) => {
        return axios.get(`http://localhost:5000/api/products/type/${type}`).then((res) => dispatch({ type: GET_PRODUCTBYTYPE, payload: res.data})).catch((error) => console.log(error))
    }
}