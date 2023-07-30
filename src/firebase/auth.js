"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "./firebase";

//global state management
const AuthUserContext = createContext({ authUser: null, isLoading: true });

// method to pass values in context provider

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  const authStateChanged = async (user) => {
    setIsLoading(true);
    if (!user) {
      clear();

      return;
    }
    setAuthUser({
      uid: user?.uid,
      email: user?.email,
      username: user?.displayName,
    });
    setIsLoading(false);
  };

  const signout = async function () {
    authSignOut(auth)
      .then(() => clear)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return { isLoading, authUser, setAuthUser, signout };
}

//function
export const AuthUserProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
