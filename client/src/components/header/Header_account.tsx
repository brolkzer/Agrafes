import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logout from "../auth/Logout";

type uidProps = {
  uid: object | any;
};

const Header_account = ({ uid }: uidProps) => {
  return (
    <div className="accountDiv">
      <div className="accountIcon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="accountMenu">
        <p>
          {uid ? (
            `Bonjour ${uid.displayName}`
          ) : (
            <p
              className="logRedir"
              onClick={() => (window.location.href = "/Auth")}
            >
              Se connecter
            </p>
          )}
        </p>
        {uid ? <Logout /> : null}
      </div>
    </div>
  );
};

export default Header_account;
