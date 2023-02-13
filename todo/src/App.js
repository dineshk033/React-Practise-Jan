import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import InputTask from "./features/addTask/inputTask";
import MenuBar from "./features/menu";
import TaskContainer from "./features/task";
import { RouterConfig } from "./router";

const router = createBrowserRouter(RouterConfig);

/***
 * title,favourite,checked
 */
function App() {
  /**
   * Returns a stateful value, and a function to update it.
   *
   * @version 16.8.0
   * @see https://reactjs.org/docs/hooks-reference.html#usestate
   */
  const [todo, setTodo] = useState([
    { label: "intro abt hooks", favourite: true, checked: true },
    { label: "decribing hooks features", favourite: false, checked: true },
    { label: "intro abot use state", favourite: false, checked: false },
  ]);
  const [count, setCount] = useState(0);
  /**
   * it will call in mounting,updating & unmunting phase
   */

  useEffect(() => {
    console.log("i'm called in all phase....");
  });

  /**
   * it will call in only mounting phase
   */
  useEffect(() => {
    console.log("i'm called in mouting phase....");
    const val = localStorage.getItem("todo");
    if (val) {
      setTodo(JSON.parse(val));
    }
  }, []);

  /**
   * it will call in only updating phase when change in states or props or JSX element
   */
  // useEffect(() => {
  //   console.log("i'm called in changing todo variables phase....");
  // }, [todo]);
  // useEffect(() => {
  //   console.log("i'm called in changing count value...");
  // }, [count]);

  const handleAdd = () => {
    const temp = [
      ...todo,
      { label: "new records has been added", favourite: false, checked: false },
    ];
    setTodo(temp);

    localStorage.setItem("todo", JSON.stringify(temp));
    // setCount(count + 1);
  };

  const updateFavourite = (arg) => {
    /***
     * way 1
     *  const tmp = JSON.parse(JSON.stringify(todo));
     * tmp[0]["favourite"] = !arg.favourite;
     */

    /**
     * way 2
     */
    const temp = todo.map((el) => {
      if (el.label === arg.label) {
        return { ...el, favourite: !arg.favourite };
      } else {
        return el;
      }
    });
    console.log(temp, arg);
    setTodo(temp);
  };
  const removeItem = (arg) => {
    const temp = todo.filter((content) => content.label !== arg.label);
    setTodo(temp);
  };

  const addTask = (value) => {
    console.log([...todo, value]);
    setTodo([...todo, value]);
  };
  return (
    <RouterProvider router={router}>
      {/* <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-3 h-100 bg-dark  bg-opacity-10 text-dark">
            <MenuBar handleClick={handleAdd} />
          </div>
          <div className="col-9 h-100 bg-primary bg-opacity-50 text-dark">
            <Outlet />
            <TaskContainer
              list={todo}
              updateFavourite={updateFavourite}
              removeItem={removeItem}
            />
            <InputTask addTask={addTask} />
          </div>
        </div>
      </div> */}
    </RouterProvider>
  );
}

export default App;
