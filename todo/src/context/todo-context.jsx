import React from "react";
import { useState } from "react";
export const TodoContext = React.createContext();

const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState([
    { label: "intro abt hooks", favourite: true, checked: true },
    { label: "decribing hooks features", favourite: false, checked: true },
    { label: "intro abot use state", favourite: false, checked: false },
    { label: "Created by context concept", favourite: false, checked: true },
  ]);

  return (
    <TodoContext.Provider value={todo}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;