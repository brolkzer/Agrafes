import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header_cart = () => {
  return (
    <div className="cartDiv">
      <button className="cartButton">
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <div className="cartDetails">
        <p className="cartPrice">00,00 €</p>
      </div>
    </div>
  );
};

export default Header_cart;
