import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const usuario = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(usuario)

  const handleUser = (usuario) => {
    setUser(usuario)
    localStorage.setItem('user', JSON.stringify(usuario));
  }

  const LogOut = () => {
    setUser(null)
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, handleUser, LogOut, setUser }}>
      {
        children
      }
    </AuthContext.Provider>
  );
}
