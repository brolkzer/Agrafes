import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import BackToTop from "../components/home/BackToTop";
import Footer from "../components/home/Footer";
import PreFooter from "../components/home/PreFooter";
import ProductDisplay from "../components/product/ProductDisplay";
import { isEmpty } from "../utils/IsEmpty";

type uidProps = {
  uid: object | any;
};

const Product = ({ uid }: uidProps) => {
  let paramsString: any = window.location;
  let searchParams = new URLSearchParams(paramsString)
    .getAll("search")
    .toString()
    .split("=")[1];

  const productsData = useSelector((state: any) => state.productsReducer);

  return (
    <>
      <Header uid={uid} />
      <div className="product-page">
        {!isEmpty(productsData) ? (
          <ProductDisplay
            productData={productsData.find(
              (product: object | any) => product._id === searchParams
            )}
          />
        ) : (
          "..."
        )}
      </div>
      <BackToTop />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Product;
