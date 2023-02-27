import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../axios";
import { UserContext } from "../context/user-context";

const LoginPage = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const { login } = useContext(UserContext);

  const [status, setStatus] = useState({ hasError: "", isLoading: false });
  const [data, setData] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });
  const { username, password } = data;

  let from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    setStatus({ ...status, isLoading: true });
    AxiosInstance.post("auth/login", data)
      .then((res) => {
        login(res.data, () => {
          // Send them back to the page they tried to visit when they were
          // redirected to the login page. Use { replace: true } so we don't create
          // another entry in the history stack for the login page.  This means that
          // when they get to the protected page and click the back button, they
          // won't end up back on the login page, which is also really nice for the
          // user experience.
          setStatus({ ...status, isLoading: false });
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        setStatus({ ...status, hasError: err });
      });
  };
  return (
    <div className="container-fluid vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-4 col-12 ">
          <div className="card">
            <div className="card-body">
              <h5 className="text-center mb-4">Login</h5>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  name="username"
                  value={username}
                  onChange={(e) => handleChange(e)}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Example textarea
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                  placeholder="password"
                />
              </div>
              <div className="mb-3 text-center row justify-content-center">
                <button
                  className="btn btn-primary col-8"
                  onClick={handleSubmit}
                  disabled={status.isLoading}
                >
                  {status.isLoading ? "Loading.." : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
