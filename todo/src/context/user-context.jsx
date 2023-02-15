import React from "react";
import { useState } from "react";
export const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    username: "dinesh",
    email: "dineh@gmail.com",
  });

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
