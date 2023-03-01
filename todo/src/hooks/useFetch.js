import { useEffect, useState } from "react";
import { AxiosInstance } from "../axios";
import { fetchTodo } from "../context/fetch-todo";

const useFetch = () => {
  const [status, setStatus] = useState({
    hasError: null,
    isLoading: false,
    isData: [],
  });

  //   useEffect(() => {
  //     setStatus({ hasError: null, isLoading: true, isData: [] });
  //     AxiosInstance.get("todos/user/5").then((res) => {
  //       console.log(res, "=???????????????????????/fetch");
  //       setStatus({ ...status, isLoading: false, isData: res.data });
  //     });
  //   }, []);

  const getTodoData = (user) => {
    if (user) {
      fetchTodo(user.id, (data) => {
        console.log(data, "=???????????????????????/gettodo");
        setStatus({ ...status, isLoading: false, isData: data.data });
      });
    }
  };

  return [status.isLoading, status.isData, getTodoData];
};

export default useFetch;
