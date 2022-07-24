import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header_account = () => {
  return (
    <div className="accountDiv">
      <div className="accountIcon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="accountMenu">
        <p>Mon compte</p>
        <p>Se connecter</p>
      </div>
    </div>
  );
};

export default Header_account;
