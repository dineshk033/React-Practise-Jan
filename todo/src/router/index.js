import { Route, Routes } from "react-router-dom";
import RequireAuth from "../auth/require-auth";
import TodoList from "../features/task/todoList";
import HomeTodo from "../pages/homeTodo";
import Layout from "../pages/Layout";
import LoginPage from "../pages/login-page.jsx";
import PendingPage from "../pages/pending-page";

export const RouterConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <RequireAuth>
            <HomeTodo />
          </RequireAuth>
        ),
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
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export const RouterConfiguration = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <RequireAuth>
            <HomeTodo />
          </RequireAuth>
        }
      />
      <Route path="taskList" element={<TodoList />} />
      <Route path="pending" element={<PendingPage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);
