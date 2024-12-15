import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const storedTokens = localStorage.getItem("authTokens");
    return storedTokens ? JSON.parse(storedTokens) : null;
  });

  const updateTokens = (tokens) => {
    setAuthTokens(tokens);
    localStorage.setItem("authTokens", JSON.stringify(tokens));
  };

  const logout = () => {
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
  };

  useEffect(() => {
  }, [authTokens]);

  return (
    <AuthContext.Provider value={{ authTokens, updateTokens, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
