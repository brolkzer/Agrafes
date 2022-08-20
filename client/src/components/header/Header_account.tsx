import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logout from "../auth/Logout";

type uidProps = {
  uid: object | any;
};

const Header_account = ({ uid }: uidProps) => {
  const relocateToAuth = () => {
    window.location.href = "/Auth";
  };

  return (
    <div className="accountDiv">
      <div className="accountIcon">
        <FontAwesomeIcon icon={faUser} onClick={() => relocateToAuth()} />
      </div>
      <div className="accountMenu">
        <p>
          {uid ? (
            `Bonjour ${uid.displayName}`
          ) : (
            <span
              className="logRedir"
              onClick={() => (window.location.href = "/Auth")}
            >
              Se connecter
            </span>
          )}
        </p>
        {uid ? <Logout /> : null}
      </div>
    </div>
  );
};

export default Header_account;
