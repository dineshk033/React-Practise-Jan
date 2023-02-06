import { useEffect, useState } from "react";
import "./App.css";
import MenuBar from "./features/menu";
import TaskContainer from "./features/task";

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

  // useEffect(() => {
  //   console.log("i'm called in all phase....");
  // }, );

  // useEffect(() => {
  //   console.log("i'm called in mouting phase....");
  // }, []);

  const handleAdd = () => {
    setTodo([
      ...todo,
      { label: "new records has been added", favourite: false, checked: false },
    ]);
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
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-3 h-100 bg-dark  bg-opacity-10 text-dark">
          <MenuBar handleClick={handleAdd} />
        </div>
        <div className="col-9 h-100 bg-primary bg-opacity-50 text-dark">
          <TaskContainer list={todo} updateFavourite={updateFavourite} />
        </div>
      </div>
    </div>
  );
}

export default App;
