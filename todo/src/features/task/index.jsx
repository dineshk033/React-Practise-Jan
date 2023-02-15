import { useContext } from "react";
import { TodoContext } from "../../context/todo-context";
import TodoList from "./todoList";

const TaskContainer = ({ list, updateFavourite, removeItem }) => {
  const todoValue = useContext(TodoContext);
  console.log(todoValue, "------------->");
  return (
    <div className="p-5">
      <TodoList
        list={todoValue}
        updateFavourite={updateFavourite}
        removeItem={removeItem}
      />
    </div>
  );
};

export default TaskContainer;

TaskContainer.defaultProps = {
  list: [
    { label: "intro abt hooks", favourite: true, checked: true },
    { label: "decribing hooks features", favourite: false, checked: true },
    { label: "intro abot use state", favourite: false, checked: false },
  ],
  updateFavourite: () => {},
  removeItem: () => {},
};
