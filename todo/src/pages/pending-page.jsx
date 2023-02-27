import { filter } from "lodash";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import TodoItem from "../features/task/todoItem";

const PendingPage = () => {
  const value = useContext(TodoContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    const tmp = filter(value.todo, "completed");
    setList(tmp);
  }, [value.todo]);

  const removeItem = () => {};

  return (
    <>
      <div>
        {list.map((task) => (
          <TodoItem
            key={task.id}
            record={task}
            removeItem={removeItem}
            updateTask={removeItem}
            updateFavourite={removeItem}
          />
        ))}
      </div>
      ;
    </>
  );
};

export default PendingPage;
