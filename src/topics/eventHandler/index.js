function EventHandler() {
  const handleClick = (arg) => {
    alert("Welcome" + arg);
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form className="card">
      <button className="btn btn-primary" onClick={() => handleClick("react")}>
        alert
      </button>
      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default EventHandler;
