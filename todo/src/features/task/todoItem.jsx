const TodoItem = ({ record, updateTask, removeItem }) => (
  <div className="card mb-1">
    <div
      style={{ padding: "0.75rem" }}
      className="card-body d-flex justify-content-between align-items-center"
    >
      <div className="form-check">
        <input
          className="form-check-input me-3"
          type="checkbox"
          onClick={() => updateTask(record)}
          defaultChecked={record.completed}
        />
        <label
          className={
            record.completed
              ? "text-decoration-line-through form-check-label"
              : "form-check-label"
          }
        >
          {record.todo}
        </label>
      </div>
      <div>
        <span
          onClick={() => removeItem(record)}
          role="button"
          style={{ fontSize: "1.2em" }}
          className="material-icons text-danger"
        >
          delete
        </span>
        {/* <span
          onClick={() => updateFavourite(record)}
          role="button"
          style={{ fontSize: "1.2em" }}
          className="material-icons"
        >
          {record.favourite ? "star" : "star_border"}
        </span> */}
      </div>
    </div>
  </div>
);

export default TodoItem;
