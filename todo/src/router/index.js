import TodoList from "../features/task/todoList";
import HomeTodo from "../pages/homeTodo";
import Layout from "../pages/Layout";

export const RouterConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeTodo />,
      },
      {
        path: "taskList",
        element: <TodoList />,
      },
    ],
  },
  {
    path: "/pending",
    element: <div>Hello credo!</div>,
  },
];
