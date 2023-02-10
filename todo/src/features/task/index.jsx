import TodoList from "./todoList";

const TaskContainer = ({ list, updateFavourite, removeItem }) => {
  return (
    <div className="p-5">
      <TodoList
        list={list}
        updateFavourite={updateFavourite}
        removeItem={removeItem}
      />
    </div>
  );
};

export default TaskContainer;
