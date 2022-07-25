import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Auth from "./components/auth/authConditionner";
import { SetStateAction, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebaseConnection";

function App() {
  const [uid, setUid] = useState<object | any>(null);

  onAuthStateChanged(auth, (currentUser: any) => setUid(currentUser));
  return (
    <>
      <Routes>
        {uid ? (
          <>
            <Route path="/" element={<Home uid={uid} />} />
            <Route path="/auth" element={<Home uid={uid} />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Home uid={uid} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home uid={uid} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="*" element={<Home uid={uid} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
