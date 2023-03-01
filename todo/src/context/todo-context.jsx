import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { fetchTodo } from "./fetch-todo";
import { UserContext } from "./user-context";
export const TodoContext = React.createContext();

const TodoContextProvider = (props) => {
  const { user } = useContext(UserContext);
  const [todo, setTodo] = useState([]);
  const [isData, isLoading, getTodoData] = useFetch();
  console.log(isData, isLoading);
  useEffect(() => {
    if (user) {
      getTodoData(user);
      // fetchTodo(user.id, (data) => {
      //   setTodo(data);
      // });
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
