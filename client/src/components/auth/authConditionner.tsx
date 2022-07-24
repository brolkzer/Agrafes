import { useState } from "react";
import Register from "./Register";
import SignIn from "./SignIn";

const authConditionner = () => {
  const [login, setLogin] = useState(true);

  return (
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
  );
};

export default authConditionner;
