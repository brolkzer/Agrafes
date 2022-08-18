import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Auth from "./components/auth/authConditionner";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebaseConnection";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./actions/products.actions";

function App() {
  const [uid, setUid] = useState<object | any>(null);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser: any) => setUid(currentUser));

  useEffect(() => {
    dispatch<any>(getAllProducts());
  }, [App]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home uid={uid} />} />
        <Route path="/Auth" element={<Auth uid={uid} />} />
        <Route path="/About" element={<About uid={uid} />} />
        <Route path="/Product" element={<Product uid={uid} />} />
        <Route path="/Cart" element={<Cart uid={uid} />} />
        <Route path="*" element={<Home uid={uid} />} />
      </Routes>
    </>
  );
}

export default App;
