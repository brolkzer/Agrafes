import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Header_cart = () => {
  const cartData = useSelector((state: any) => state.cartReducer);
  const relocateToCart = () => {
    window.location.href = "/Cart";
  };

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
      <div className="cartDetails"></div>
    </div>
  );
};

export default Header_cart;
