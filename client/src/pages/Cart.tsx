import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "../components/cart/CartItemCard";
import Header from "../components/header/Header";
import BackToTop from "../components/home/BackToTop";
import Footer from "../components/home/Footer";
import PreFooter from "../components/home/PreFooter";
import { isEmpty } from "../utils/IsEmpty";

type uidProps = {
  uid: object | any;
};
const Cart = ({ uid }: uidProps) => {
  const cartData = useSelector((state: any) => state.cartReducer);
  const productsData = useSelector((state: any) => state.productsReducer);
  return (
    <>
      <Header uid={uid} />
      <div className="cartPage">
        <p>Votre panier : </p>
        <ul>
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
      <BackToTop />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Cart;
