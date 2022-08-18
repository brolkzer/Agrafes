import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils/IsEmpty";

const Header_cart = () => {
  const cartData = useSelector((state: any) => state.cartReducer);
  const productsData = useSelector((state: any) => state.productsReducer);
  const [cartPrice, setCartPrice] = useState<string>();
  const relocateToCart = () => {
    window.location.href = "/Cart";
  };

  const getTotalCartPrice = (): string | undefined => {
    if (!isEmpty(cartData) && !isEmpty(productsData)) {
      let itemsPrice = 0;
      let eachItemPrice = 0;
      let totalItemsPrice = 0;

      for (const product of cartData) {
        eachItemPrice =
          productsData.find((p: any) => p._id == product.id).prix / 10000;
        itemsPrice += product.quantity * eachItemPrice;
      }
      totalItemsPrice = itemsPrice;
      return totalItemsPrice.toFixed(2);
    }
  };
  getTotalCartPrice();

  useEffect(() => {
    if (!isEmpty(cartData) && !isEmpty(productsData))
      setCartPrice(getTotalCartPrice());
    console.log(typeof cartPrice);
  }, [Header_cart, getTotalCartPrice]);

  return (
    <div className="cartDiv">
      <button className="cartButton">
        <FontAwesomeIcon
          icon={faCartShopping}
          onClick={() => relocateToCart()}
        />
        <span className="cartLength">
          {cartData && cartData.length < 9 ? "0" : null}
          {cartData ? cartData.length : ""}
        </span>
      </button>
      <div className="cartDetails">
        <p className="cartPrice">{cartPrice}€</p>
      </div>
    </div>
  );
};

export default Header_cart;
