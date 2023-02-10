import { useState } from "react";
import { object, boolean, string } from "yup";

const obj = object({
  checked: boolean(),
  label: string().required("required").min(10, "should be 10").max(20),
});

const InputTask = ({ addTask }) => {
  const [task, setTask] = useState({
    checked: false,
    label: "",
    favourite: false,
  });
  const [error, setError] = useState(null);
  //   const [taskLabel, setTaskLabel] = useState("test");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task);
    try {
      await obj.validate(task);
      addTask(task);
      //   await obj.validate(task, { abortEarly: false });
    } catch (err) {
      console.log(err.errors);
      setError(err.errors[0]);
    }
  };

  return (
    <div className="card">
      <form
        className="card-body d-flex justify-content-evenly"
        onSubmit={handleSubmit}
      >
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
            value={task.label}
            name="label"
            onChange={handleChange}
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
      {error && <small className="text-danger"> {error}</small>}
    </div>
  );
};

export default InputTask;
