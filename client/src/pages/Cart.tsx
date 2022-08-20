import {
  faArrowDown,
  faArrowDownShortWide,
  faArrowUpShortWide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItemCard from "../components/cart/CartItemCard";
import Header from "../components/header/Header";
import BackToTop from "../components/home/BackToTop";
import Footer from "../components/home/Footer";
import NavMenu from "../components/home/NavMenu";
import PreFooter from "../components/home/PreFooter";
import { isEmpty } from "../utils/IsEmpty";

type uidProps = {
  uid: object | any;
};
const Cart = ({ uid }: uidProps) => {
  const cartData = useSelector((state: any) => state.cartReducer);
  const productsData = useSelector((state: any) => state.productsReducer);
  const [cartPrice, setCartPrice] = useState<string>();
  const [cartToggle, setCartToggle] = useState<boolean>(true);

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

  useEffect(() => {
    if (!isEmpty(cartData) && !isEmpty(productsData))
      setCartPrice(getTotalCartPrice());
  }, [Cart, getTotalCartPrice]);

  const handleCartToggle = () => {
    if (cartToggle === true) setCartToggle(false);
    else if (cartToggle === false) setCartToggle(true);

    document
      .querySelector(".cartToggler")
      ?.classList.toggle("cartToggler-visible");
    document
      .querySelector(".cartToggler")
      ?.classList.toggle("cartToggler-invisible");
  };

  return (
    <>
      <Header uid={uid} />
      <div className="cartPage">
        <div className="cartPage-summary">
          <div className="cartPage-summary-container">
            <div className="cartPage-summary-container-title">
              Résumé de votre commande :
            </div>
            <div className="cartPage-summary-container-desc">
              <div className="cartPage-summary-container-desc-cartToggle">
                {cartToggle ? (
                  <div onClick={() => handleCartToggle()}>
                    <FontAwesomeIcon
                      icon={faArrowUpShortWide}
                      onClick={() => handleCartToggle()}
                    />{" "}
                    &nbsp; Masquer les détails
                  </div>
                ) : (
                  <div onClick={() => handleCartToggle()}>
                    <FontAwesomeIcon
                      icon={faArrowDownShortWide}
                      onClick={() => handleCartToggle()}
                    />{" "}
                    &nbsp; Afficher les détails
                  </div>
                )}
              </div>
              <div className="cartPage-summary-container-desc-totalAmount">
                <p>
                  Coût total du panier: &nbsp; <span>{cartPrice}€</span>
                </p>
              </div>
              <div className="cartPage-summary-container-desc-paymentButton">
                <button>Valider le panier</button>
              </div>
            </div>
            <ul className="cartToggler cartToggler-visible">
              {!isEmpty(cartData) && !isEmpty(productsData)
                ? cartData.map((item: any) => {
                    return (
                      <CartItemCard
                        itemData={productsData.find(
                          (product: any) => item.id == product._id
                        )}
                        key={item.id}
                      />
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
        <div className="afterCart">
          <div className="afterCart-title">
            <FontAwesomeIcon icon={faArrowDown} /> &nbsp; Continuer vos achats
            &nbsp;
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <NavMenu />
        </div>
      </div>

      {cartToggle ? <BackToTop /> : null}
      <PreFooter />
      <Footer />
    </>
  );
};

export default Cart;
