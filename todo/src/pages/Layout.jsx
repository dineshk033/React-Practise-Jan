import { Outlet } from "react-router-dom";
import MenuBar from "../features/menu";

const Layout = () => {
  const handleAdd = () => {};
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-3 h-100 bg-dark  bg-opacity-10 text-dark">
          <MenuBar handleClick={handleAdd} />
        </div>
        <div className="col-9 h-100 bg-primary bg-opacity-50 text-dark">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
