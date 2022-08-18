import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../../actions/cart.actions";
import { addToCart } from "../../utils/localStorage";

const AddToCartButton = ({ productData }: object | any) => {
  const CartItemQuantityRef = useRef<HTMLInputElement>(null);
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <div className="cartSide">
        <input type="number" defaultValue={1} ref={CartItemQuantityRef} />
        <button
          className="addToCartBtn"
          onClick={() => {
            addToCart(productData, CartItemQuantityRef.current?.valueAsNumber);
            dispatch(getCart());
            setModalToggle(true);
            setTimeout(() => {
              setModalToggle(false);
            }, 2500);
          }}
        >
          Ajouter au panier
        </button>
        <div
          className="productCartModal"
          style={modalToggle ? { display: "grid" } : {}}
        >
          Le produit a bien été ajouté à votre panier
        </div>
      </div>
    </>
  );
};

export default AddToCartButton;
