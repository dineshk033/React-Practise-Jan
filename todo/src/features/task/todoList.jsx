import { useEffect } from "react";
import TodoItem from "./todoItem";

function TodoList({ list, updateFavourite, removeItem, updateTask }) {
  // useEffect(() => {
  //   console.log("change in todolist");
  // }, [list]);
  return (
    <div>
      <h5 className="fs-4 text-light mb-4">
        <span className="material-icons align-bottom pe-1">task</span>Tasks
      </h5>
      {list.map((task) => (
        <TodoItem
          key={task.id}
          record={task}
          removeItem={removeItem}
          updateTask={updateTask}
          updateFavourite={updateFavourite}
        />
      ))}
    </div>
  );
}

export default TodoList;

TodoList.defaultProps = {
  list: [
    { label: "intro abt hooks", favourite: true, checked: true },
    { label: "decribing hooks features", favourite: false, checked: true },
    { label: "intro abot use state", favourite: false, checked: false },
  ],
};
