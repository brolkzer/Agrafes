import NavEcriture from "./NavEcriture";
import NavFournitures from "./NavFournitures";
import NavPapeterie from "./NavPapeterie";

const NavMenu = () => {
  return (
    <>
      <div className="navMenu">
        <NavPapeterie />
        <NavEcriture />
        <NavFournitures />
      </div>
    </>
  );
};

export default NavMenu;
