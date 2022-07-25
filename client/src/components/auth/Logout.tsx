import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseConnection";

const Logout = () => {
  const handleLogout = async () => {
    signOut(auth);
  };

  return (
    <p className="logRedir" onClick={() => handleLogout()}>
      Se déconnecter
    </p>
  );
};

export default Logout;
