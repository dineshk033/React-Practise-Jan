import { AxiosInstance } from "../axios";

export const fetchTodo = (id, callback) => {
  AxiosInstance.get(`todos/user/${id}`).then((res) => callback(res.data.todos));
};
