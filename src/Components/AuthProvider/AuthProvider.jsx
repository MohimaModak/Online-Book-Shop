import React, { useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.Config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const creatUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setloading(true);
    signOut(auth);
  };

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (currentUser) => {
      console.log("stay here bodygard", currentUser);
      setuser(currentUser);
      setloading(false);
    });
    return () => observer();
  }, []);

  const authIfo = { user, creatUser, signInWithGoogle, signInUser, loading,logOut };

  return (
    <AuthContext.Provider value={authIfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
