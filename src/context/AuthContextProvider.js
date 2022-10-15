import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const { isAuth, setIsAuth } = useFetch("/auth/validate");

  const value = { isAuth, setIsAuth };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
