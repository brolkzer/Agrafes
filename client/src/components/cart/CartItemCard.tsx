import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../actions/cart.actions";
import { isEmpty } from "../../utils/IsEmpty";
import { modifyQuantity } from "../../utils/localStorage";

const CartItemCard = ({ itemData }: any) => {
  const cartData = useSelector((state: any) => state.cartReducer);
  const CartItemQuantityRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<any>();

  return (
    <li className="cartPage-list">
      <div
        className="cartPage-list-img"
        style={{ backgroundImage: `url("${itemData.img}")` }}
      ></div>
      <div className="cartPage-list-desc">
        <div className="cartPage-list-desc-nom">{itemData.nom}</div>
        <div className="cartPage-list-desc-description">
          {itemData.description.length > 330
            ? itemData.description.slice(0, 331) + " ..."
            : itemData.description}
        </div>
      </div>
      <div className="cartPage-list-quantity">
        <input
          type="number"
          defaultValue={
            !isEmpty(cartData)
              ? cartData.find((item: any) => item.id == itemData._id).quantity
              : null
          }
          ref={CartItemQuantityRef}
          onChange={() => {
            modifyQuantity(
              itemData._id,
              CartItemQuantityRef.current?.valueAsNumber
            );
            dispatch(getCart());
          }}
        />
        <button
          onClick={() => {
            modifyQuantity(itemData._id, 0);
            dispatch(getCart());
          }}
        >
          Retirer
        </button>
      </div>
      <div className="cartPage-list-price">
        <p>
          Prix unitaire: &nbsp;{" "}
          <span>{" " + (itemData.prix / 10000).toFixed(2)}</span> €
        </p>
        <p>
          Prix total: &nbsp;
          <span>
            {(
              (itemData.prix / 10000) *
              (!isEmpty(cartData)
                ? cartData.find((item: any) => item.id == itemData._id).quantity
                : null)
            ).toFixed(2)}
          </span>
          €
        </p>
      </div>
    </li>
  );
};

export default CartItemCard;
