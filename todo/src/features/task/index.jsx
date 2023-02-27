import { useContext, useState } from "react";
import { AxiosInstance } from "../../axios";
import { TodoContext } from "../../context/todo-context";
import Spinner from "../../shared/spinner";
import TodoList from "./todoList";

const TaskContainer = ({ list, updateFavourite }) => {
  const todoValue = useContext(TodoContext);
  const [status, setStatus] = useState({ hasError: null, isLoading: false });

  const deleteTask = async (id) => {
    try {
      const res = await AxiosInstance.delete(`todos/${id}`);
      console.log(res);
    } catch (err) {}
  };
  const removeItem = (arg) => {
    console.log(arg);
    deleteTask(arg.id);
  };

  const updateTask = async (arg) => {
    console.log(arg, "+++++++++++");
    setStatus({ hasError: null, isLoading: true });
    try {
      const res = await AxiosInstance.put(`todos/${arg.id}`, {
        completed: !arg.completed,
      });
      console.log(res);
      setStatus({ ...status, isLoading: false });
    } catch (err) {
      console.log(err);
      setStatus({ isLoading: false, hasError: err.message });
    }
  };
  return (
    <div className="p-5 position-relative">
      {status.isLoading && <Spinner />}
      {status.hasError && (
        <div className="m-3 alert alert-danger">{status.hasError}</div>
      )}
      <TodoList
        list={todoValue.todo}
        updateFavourite={updateFavourite}
        removeItem={removeItem}
        updateTask={updateTask}
      />
      {/* <div
        style={{ height: "100px", width: "80%", background: "teal" }}
        className="position-relative"
      >
        <Spinner />
      </div> */}
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
