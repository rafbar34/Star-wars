import { createContext, useEffect, useState, useContext } from "react";
import {onAuthStateChanged,} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
  
    <userAuthContext.Provider value={{  user }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  const ctx=useContext(userAuthContext)
  if(!ctx){
    throw new Error("Component not wrapped in userAuthContext")
  }
  return ctx;
}
