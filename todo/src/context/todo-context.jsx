import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchTodo } from "./fetch-todo";
import { UserContext } from "./user-context";
export const TodoContext = React.createContext();

const TodoContextProvider = (props) => {
  const { user } = useContext(UserContext);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (user) {
      fetchTodo(user.id, (data) => {
        setTodo(data);
      });
    }
  }, [user]);

  const updateTodo = (arg) => {
    setTodo([...todo, arg]);
  };
  return (
    <TodoContext.Provider value={{ todo: todo, updateTodo: updateTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
