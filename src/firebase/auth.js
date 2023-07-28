import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "firebase";

//global state management
const AuthUserContext = new createContext({ authUser: null, isLoading: true });

const clear = () => {
  setAuthUser(null);
  isLoading(false);
};

// method to pass values in context provider

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const authStateChanged = async (user) => {
    isLoading(true);
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);
}

export const signout = async function () {
  authSignOut(auth)
    .then(() => clear)
    .catch((error) => console.error(error));

  return {
    isLoading,
    authUser,
    setAuthUser,
    signout,
  };
};
//function
export const AuthUserProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.provider value={auth}>{children}</AuthUserContext.provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
