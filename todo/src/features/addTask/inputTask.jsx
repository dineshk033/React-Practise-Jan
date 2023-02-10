import { useState } from "react";

const InputTask = () => {
  const [task, setTask] = useState({ checked: false, taskLabel: "" });
  const [taskLabel, setTaskLabel] = useState("test");
  const handleChange = (event) => {
    // const tmp = {};
    // tmp[event.target.name] = event.target.value;
    console.log(event.target.value, event.target.name);
    // setTaskLabel(event.target.value);
    let Value = event.target.value;
    if (event.target.name === "checked") {
      Value = event.target.checked;
    }
    setTask({ ...task, [event.target.name]: Value });
  };
  console.log(task);
  return (
    <div className="card">
      <form className="card-body d-flex justify-content-evenly">
        <div className="d-flex w-75">
          <input
            className="form-check-input me-3"
            name="checked"
            checked={task.checked}
            onChange={handleChange}
            type="checkbox"
          />
          <input
            className="form-control  form-control-sm me-3"
            value={task.taskLabel}
            name="taskLabel"
            onChange={handleChange}
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTask;
