import Header from "../components/header/Header";
import BackToTop from "../components/home/BackToTop";
import Footer from "../components/home/Footer";
import HomeDesc from "../components/home/HomeDesc";
import Incontournables from "../components/home/Incontournables";
import NavMenu from "../components/home/NavMenu";
import PreFooter from "../components/home/PreFooter";

type uidProps = {
  uid: object | any;
};

const Home = ({ uid }: uidProps) => {
  return (
    <>
      <Header uid={uid} />
      <div className="homeDiv">
        <HomeDesc />
        <NavMenu />
        <Incontournables />
      </div>
      <BackToTop />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Home;
