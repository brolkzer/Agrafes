import { useState } from "react";
import AlreadyLogged from "./AlreadyLogged";
import Register from "./Register";
import SignIn from "./SignIn";

type uidProps = {
  uid: object | any;
};

const authConditionner = ({ uid }: uidProps) => {
  const [login, setLogin] = useState(false);

  return (
    <>
      {uid ? (
        <AlreadyLogged />
      ) : (
        <div className="bgAuth">
          <div className="authDiv">
            <div className="authButtons">
              <button className="authButton" onClick={() => setLogin(false)}>
                Se connecter
              </button>
              <button className="authButton" onClick={() => setLogin(true)}>
                S'inscrire
              </button>
            </div>
            {login ? <Register /> : <SignIn />}
          </div>
        </div>
      )}
    </>
  );
};

export default authConditionner;
