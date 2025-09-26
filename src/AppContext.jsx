import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AppContext = createContext();

// Create the context provider component
export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // A function to handle user login
  const login = (user) => {
    setCurrentUser(user);
    // You might also want to store the user in local storage
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  // A function to handle user logout
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  // Check for a logged-in user when the app loads
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // The value that will be supplied to any consumer of the context
  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};