import Header_account from "./Header_account";
import Header_cart from "./Header_cart";

const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <div className="logoDiv">
          <img className="logoImg" src="/assets/Logo_250x250.webp" alt="" />
        </div>
        <div className="headerForm">
          <h1>Votre référence de vente de fournitures en ligne !</h1>
          <form>
            <input type="text" placeholder="Recherchez un produit" />
          </form>
        </div>
      </div>
      <div className="headerRight">
        <Header_account />

        <Header_cart />
      </div>
    </header>
  );
};

export default Header;
