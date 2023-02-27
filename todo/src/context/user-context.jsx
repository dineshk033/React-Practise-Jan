import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const UserContext = React.createContext();

function useAuth() {
  const [user, setUser] = React.useState(false);

  return {
    user,
    login(arg, callback) {
      setUser(arg);
      callback();
    },
  };
}

const UserContextProvider = (props) => {
  const value = useAuth();
  console.log(value.user, "cont+++++++++++");
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
