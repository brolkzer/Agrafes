import Browse_products from "../components/browse/Browse_products";
import Header from "../components/header/Header";
import BackToTop from "../components/home/BackToTop";
import Footer from "../components/home/Footer";
import PreFooter from "../components/home/PreFooter";

const Browse = ({ uid }: any) => {
  let paramsString: any = window.location;
  let searchParams = new URLSearchParams(paramsString)
    .getAll("search")
    .toString()
    .split("=")[1]
    .split("&");

  return (
    <>
      <Header uid={uid} />
      <div className="browsePage">
        <Browse_products />
      </div>
      <BackToTop />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Browse;
