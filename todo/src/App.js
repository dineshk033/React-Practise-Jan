import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import TodoContextProvider from "./context/todo-context";
import UserContextProvider from "./context/user-context";

import { RouterConfig, RouterConfiguration } from "./router";

// const router = createBrowserRouter(RouterConfig);

/***
 * title,favourite,checked
 */
function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <TodoContextProvider>
          <RouterConfiguration />
          {/* <RouterProvider router={router}></RouterProvider> */}
        </TodoContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
