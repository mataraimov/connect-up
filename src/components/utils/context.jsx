import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState({
    isAuth: false,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      setAuthData({
        isAuth: true,
      });
    }
  }, []);

  return <AuthContext.Provider value={{ authData, setAuthData }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
