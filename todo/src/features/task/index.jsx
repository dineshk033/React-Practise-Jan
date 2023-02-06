import TodoList from "./todoList";

const TaskContainer = ({ list, updateFavourite }) => {
  return (
    <div className="p-5">
      <TodoList list={list} updateFavourite={updateFavourite} />
    </div>
  );
};

export default TaskContainer;
