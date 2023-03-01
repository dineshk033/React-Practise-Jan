import { Provider } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import TodoContextProvider from "./context/todo-context";
import UserContextProvider from "./context/user-context";
import useToggle from "./hooks/useToogle";
import { store } from "./redux/store";

import { RouterConfig, RouterConfiguration } from "./router";

// const router = createBrowserRouter(RouterConfig);

/***
 * title,favourite,checked
 */
function App() {
  const [status, toggleStatus] = useToggle(false);
  console.log(status, "+++++++++++++++++togglestatus");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserContextProvider>
          {/* <button onClick={() => toggleStatus()}>
            Toggle {status.toString()}
          </button> */}
          <TodoContextProvider>
            <RouterConfiguration />
            {/* <RouterProvider router={router}></RouterProvider> */}
          </TodoContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
