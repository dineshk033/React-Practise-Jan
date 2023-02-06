const TodoItem = ({ record, updateFavourite }) => (
  <div className="card mb-1">
    <div
      style={{ padding: "0.75rem" }}
      className="card-body d-flex justify-content-between align-items-center"
    >
      <div className="form-check">
        <input
          className="form-check-input me-3"
          type="checkbox"
          defaultChecked={record.checked}
        />
        <label
          className={
            record.checked
              ? "text-decoration-line-through form-check-label"
              : "form-check-label"
          }
        >
          {record.label}
        </label>
      </div>
      <span
        onClick={() => updateFavourite(record)}
        role="button"
        style={{ fontSize: "1.2em" }}
        className="material-icons"
      >
        {record.favourite ? "star" : "star_border"}
      </span>
    </div>
  </div>
);

export default TodoItem;
