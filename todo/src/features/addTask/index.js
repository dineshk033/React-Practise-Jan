function AddTask(props) {
  console.log(props);
  return (
    <button className="btn btn-sm btn-warning" onClick={props.handleClick}>
      Add Task
    </button>
  );
}

export default AddTask;
