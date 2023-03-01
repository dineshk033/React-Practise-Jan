import { useSelector } from "react-redux";
import TodoItem from "../features/task/todoItem";

const ReduxTodo = () => {
  const todo = useSelector((data) => data);
  const dummy = () => {};
  return (
    <>
      <h5>Redux todo</h5>
      {todo.map((task) => (
        <TodoItem
          key={task.id}
          record={task}
          removeItem={dummy}
          updateTask={dummy}
          updateFavourite={dummy}
        />
      ))}
    </>
  );
};

export default ReduxTodo;
