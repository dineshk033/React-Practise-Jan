import { useStore } from "react-redux";
import InputTask from "../features/addTask/inputTask";
import TaskContainer from "../features/task";

const HomeTodo = () => {
  const store = useStore();
  console.log(store.getState(), "store****************8");
  return (
    <div className="">
      <TaskContainer />
      <InputTask />
    </div>
  );
};

export default HomeTodo;
