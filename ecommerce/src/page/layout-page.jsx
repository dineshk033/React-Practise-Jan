import { Outlet } from "react-router-dom";
import Header from "../features/core/header";

const LayoutPage = () => {
  return (
    <div>
      <Header />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      <div className="card bg-light mt-5">footer here</div>
    </div>
  );
};

export default LayoutPage;
