import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/user-context";

function RequireAuth({ children }) {
  let auth = useContext(UserContext);
  let location = useLocation();
  console.log(auth, "require------------>");
  // if (!auth.user === "admin") {
  //   // return <Navigate to="/" state={{ from: location }} replace />;
  //   return <div>You don't have permission to add records</div>;
  // }
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
