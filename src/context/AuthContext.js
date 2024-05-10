import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const useProduct = createContext();
export const useMainContext = () => useContext(useProduct);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const googleProvider = new GoogleAuthProvider();

  async function registerGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  async function succesRegister() {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        return;
      }
      setUser(null);
    });
  }

  useEffect(() => {
    succesRegister();
  }, []);

  let values = {
    registerGoogle,
    user,
  };
  return <useProduct.Provider value={values}>{children}</useProduct.Provider>;
};

export default AuthContext;
