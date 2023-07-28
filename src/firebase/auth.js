import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";

//global state management
const AuthUserContext = new createContext({ authUser: null, isLoading: true });

// method to pass values in context provider

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {}, []);
}

//function
export const AuthUserProvider = ({ children }) => {
  return (
    <AuthUserContext.provider value={{}}>{children}</AuthUserContext.provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
