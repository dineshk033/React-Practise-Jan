import { useState } from "react";
import "./App.css";
import AddTask from "./features/addTask";
import MenuBar from "./features/menu";

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
    "intro abt hooks",
    "decribing hooks features",
    "intro abot use state",
  ]);

  const handleAdd = () => {
    setTodo([...todo, "new records has been added", "event handle working"]);
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-3 h-100 bg-dark  bg-opacity-10 text-dark">
          <MenuBar handleClick={handleAdd} />

          {/* <button className="btn btn-sm btn-warning" onClick={handleAdd}>
            Add parent Task
          </button> */}
        </div>
        <div className="col-9 h-100 bg-primary bg-opacity-50 text-light">
          {todo.join(" , ")}
        </div>
      </div>
    </div>
  );
}

export default App;
