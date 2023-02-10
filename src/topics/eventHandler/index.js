import { Heading } from "../styled";
import classes from "./index.module.css";

function EventHandler() {
  const handleClick = (arg) => {
    alert("Welcome" + arg);
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form className={classes.container + " p-5"}>
      <Heading color="primary">Event handlign</Heading>
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
