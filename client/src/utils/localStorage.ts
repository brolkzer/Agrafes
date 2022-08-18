import { isEmpty } from "./IsEmpty";

let cart:any = [];

export const addToCart = (
    productData: object | any,
    productQuantity: any
  ) => {
    let cartItem = {
        id: productData._id,
        quantity: productQuantity
    }
    

    try {
        if (!isEmpty(localStorage.cart)) {
            let cart = JSON.parse(localStorage.cart);

            if (productQuantity == 0) alert('Veuillez choisir une quantité supérieure à 0')
            else if (productQuantity > 0) {

                if (cart.find((item:any) => item.id == productData._id)) {
                    cart.map((item:any) => {
                        if (item.id == productData._id) {
                            item.quantity += productQuantity;
                            localStorage.cart = JSON.stringify(cart)                
                        }
                    })
                }
                else if (cart.find((item:any) => item.id != productData._id)) {
                    cart.push(cartItem);
                    localStorage.cart = JSON.stringify(cart)
                }
            }
        }

        else if (isEmpty(localStorage.cart)) {
            if (productQuantity == 0) alert('Veuillez choisir une quantité supérieure à 0')
            else if (productQuantity > 0) {
                cart.push(cartItem);
                localStorage.cart = JSON.stringify(cart)
            }
        }
    }   catch (error: any) {
        console.log(error + ` Error trying to add product n°${productData._id} to the cart.`);        
    }
}

export const modifyQuantity = (itemId:string, itemQuantity:any) => {
    
    try {
        if (!isEmpty(localStorage.cart)) {
            let cart = JSON.parse(localStorage.cart);
            
            if (cart.find((item:any) => item.id == itemId)) {
                cart.map((item:any) => {
                    if (item.id == itemId) {
                        if (itemQuantity > 0) {
                            item.quantity = itemQuantity                            
                            localStorage.cart = JSON.stringify(cart)
                        }
                        else if (itemQuantity == 0) {
                            cart = cart.filter((item:any) => item.id != itemId)
                            localStorage.cart = JSON.stringify(cart)
                        }
                    }
                })
            }
        }
    } catch (error: any) {
        console.log(error + ` Error trying to modify product n°${itemId}'s quantity in the cart.`);        
    }
}