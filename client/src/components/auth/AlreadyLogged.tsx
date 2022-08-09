import React, { useState } from "react";

const AlreadyLogged = () => {
  const [login, setLogin] = useState(false);

  const homeRedirection = () => {
    window.location.href = "/Home";
  };

  setTimeout(homeRedirection, 3000);

  return (
    <div className="bgAuth">
      <div className="authDiv">
        <h1 className="already-logged">Vous êtes déjà connecté !</h1>

        <h2 className="already-logged">
          Vous allez être redirigé automatiquement sur la page d'accueil
        </h2>
        <a href="Home">
          <h3 className="already-logged redirection-home">
            Sinon vous pouvez cliquer ici pour être rédirigé manuellement
          </h3>
        </a>
      </div>
    </div>
  );
};

export default AlreadyLogged;
