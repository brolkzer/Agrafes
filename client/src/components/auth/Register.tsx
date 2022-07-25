import { useRef, useState } from "react";
import { auth } from "../../utils/firebaseConnection";

const Register = () => {
  const registerEmail = useRef<any>("");
  const registerPassword = useRef<any>("");
  const [displayName, setDisplayName] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current?.value,
          registerPassword.current?.value
        )
        .then(async (userAuth: any) => {
          await userAuth.user
            .updateProfile({
              displayName,
            })
            .then(() => console.log(userAuth));
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="formDiv">
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="email"
            placeholder="Adresse e-mail"
            required
            ref={registerEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={registerPassword}
          />
          <input
            type="text"
            placeholder="Nom"
            required
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input type="submit" value="Valider l'inscription" />
        </form>
      </div>
    </>
  );
};

export default Register;
