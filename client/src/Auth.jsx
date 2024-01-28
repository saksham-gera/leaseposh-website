import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [IsLoggedIn, setLoggedIn] = useState(false);
  const [response, setResponse] = useState();

  const isLoggedIn = async () => {
    try {
      const response = await axios.get('http://localhost:4000/login', {
        headers: { Authorization: localStorage.getItem('token')  },
      });
      console.log('User profile:', response.data);
      if(response.data) {
        setLoggedIn(true);
        setResponse(response);
      }
    } catch (error) {
      console.error('Profile fetch failed', error.response);
    }
  }
  useEffect(() => {isLoggedIn()}, [])

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ IsLoggedIn, response, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};