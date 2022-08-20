import { useRef } from "react";
import Header_account from "./Header_account";
import Header_cart from "./Header_cart";

const Header = ({ uid }: any) => {
  const browseInputRef = useRef<HTMLInputElement>(null);
  const browseRelocate = (e: any) => {
    e.preventDefault();
    window.location.href = `/Browse?=${browseInputRef.current?.value}`;
  };

  return (
    <header>
      <div className="headerLeft" id="top">
        <div className="logoDiv">
          <a href="/Home">
            <img className="logoImg" src="/assets/Logo_250x250.webp" alt="" />
          </a>
        </div>
        <div className="headerForm">
          <h1>Votre référence de vente de fournitures en ligne !</h1>
          <form onSubmit={(e) => browseRelocate(e)}>
            <input
              type="text"
              placeholder="Recherchez un produit"
              ref={browseInputRef}
              onChange={() => console.log(browseInputRef.current?.value)}
            />
          </form>
        </div>
      </div>
      <div className="headerRight">
        <Header_account uid={uid} />

        <Header_cart />
      </div>
    </header>
  );
};

export default Header;
