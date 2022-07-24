import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { auth } from "../../utils/firebaseConnection";

const SignIn = () => {
  const loginEmail = useRef<any>("");
  const loginPassword = useRef<any>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current?.value,
        loginPassword.current?.value
      )
        .then(() => (window.location.href = "/"))
        .catch((error: any) => console.log(error));
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <h1>Se connecter</h1>
      <form onSubmit={(e) => handleLogin(e)} className="">
        <input
          type="email"
          placeholder="Adresse e-mail"
          required
          ref={loginEmail}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          required
          ref={loginPassword}
        />
        <input type="submit" value="Se connecter" />
      </form>
    </>
  );
};

export default SignIn;
