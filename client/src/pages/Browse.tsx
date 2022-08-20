import Browse_prodcuts from "../components/browse/Browse_prodcuts";
import Browse_side from "../components/browse/Browse_side";
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
        <Browse_side />
        <Browse_prodcuts />
      </div>
      <BackToTop />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Browse;
