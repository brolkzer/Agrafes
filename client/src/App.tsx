import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Auth from "./components/auth/authConditionner";
import { SetStateAction, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebaseConnection";

function App() {
  const [uid, setUid] = useState(null);

  onAuthStateChanged(auth, (currentUser: any) => setUid(currentUser));
  return (
    <>
      <Routes>
        {uid ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Home />} />
          </>
        ) : (
          <Route path="*" element={<Auth />} />
        )}
      </Routes>
    </>
  );
}

export default App;
