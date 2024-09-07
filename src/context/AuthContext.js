import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const useProduct = createContext();
export const useMainContext = () => useContext(useProduct);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const vkProvider = new OAuthProvider("vk.com");

  async function registerGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user); // Колдонуучуну абалга алуу
    } catch (error) {
      console.error('Google Login Error:', error);
    }
  }

  async function registerFacebook() {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setUser(result.user);
    } catch (error) {
      console.error('Facebook Login Error:', error);
    }
  }

  async function registerVk() {
    try {
      const result = await signInWithPopup(auth, vkProvider);
      setUser(result.user);
    } catch (error) {
      console.error('VK Login Error:', error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Тазалоо функциясы
  }, []);

  const values = {
    registerGoogle,
    registerFacebook,
    registerVk,
    user,
  };
  
  return (
    <useProduct.Provider value={values}>
      {children}
    </useProduct.Provider>
  );
};

export default AuthContext;
