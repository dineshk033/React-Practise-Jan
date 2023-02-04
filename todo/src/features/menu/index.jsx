import AddTask from "../addTask";
import UserInfo from "./userInfo";

const MenuBar = ({ handleClick }) => {
  return (
    <div className="py-3 px-2 d-grid  gap-3">
      <UserInfo />
      <AddTask handleClick={handleClick} />
    </div>
  );
};

export default MenuBar;
