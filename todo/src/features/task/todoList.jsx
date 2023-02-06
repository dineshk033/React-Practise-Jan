import TodoItem from "./todoItem";

function TodoList({ list, updateFavourite }) {
  return (
    <div>
      <h5 className="fs-4 text-light mb-4">
        <span className="material-icons align-bottom pe-1">task</span>Tasks
      </h5>
      {list.map((task) => (
        <TodoItem
          key={task.label}
          record={task}
          updateFavourite={updateFavourite}
        />
      ))}
    </div>
  );
}

export default TodoList;
