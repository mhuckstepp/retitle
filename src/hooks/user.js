import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext([]);
const LOCAL_STORAGE_KEY = 'RETITLE';

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage?.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUser));
  };

  useEffect(() => {
    const userData = localStorage?.getItem(LOCAL_STORAGE_KEY);
    if (userData) setUser(JSON.parse(userData));
  }, []);

  return (
    <UserContext.Provider value={[user, updateUser]}>
      {children}
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
