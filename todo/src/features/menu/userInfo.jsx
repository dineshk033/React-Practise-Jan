import { useContext } from "react";
import { UserContext } from "../../context/user-context";

const UserInfo = ({ image }) => {
  const { user } = useContext(UserContext);
  // console.log(user);
  return (
    <>
      {user && (
        <div className="d-flex align-items-center ">
          <div className="me-3">
            <img
              src={user.image}
              className="rounded-circle"
              alt="UserImage"
              width="40"
              height="40"
            />
          </div>
          <div className="">
            <div className="fs-6 fw-semibold">
              {user.firstName} {user.lastName}
            </div>
            <small>
              {user.email}
              <span
                style={{ fontSize: "1em" }}
                className="material-icons  align-middle ps-2"
              >
                unfold_more
              </span>
            </small>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;

UserInfo.defaultProps = {
  image:
    "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png",
};
