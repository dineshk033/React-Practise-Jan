import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import UserInfo from "./userInfo";

const MenuBar = ({ handleClick }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="py-3 px-2 d-grid  gap-3">
      <UserInfo />
      {/* <AddTask handleClick={handleClick} /> */}
      {/* <button className="btn btn-sm btn-warning mt-2">Task List</button> */}
      <ul class="list-group ">
        <Link
          to="/"
          class="list-group-item  list-group-item-action list-group-item-primary active"
        >
          Add Task
        </Link>
        <Link
          to="/taskList"
          class="list-group-item  list-group-item-action list-group-item-primary "
        >
          Task List
        </Link>
        <Link
          to="/pending"
          class="list-group-item  list-group-item-action list-group-item-primary "
        >
          Pending Task
        </Link>
        <Link class="list-group-item  list-group-item-action list-group-item-primary ">
          Completed List
        </Link>
        {!user && (
          <Link
            to="/login"
            class="list-group-item  list-group-item-action list-group-item-primary "
          >
            Login
          </Link>
        )}
      </ul>
    </div>
  );
};

export default MenuBar;
