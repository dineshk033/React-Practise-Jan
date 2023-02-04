const UserInfo = ({ image }) => (
  <div className="row me-0">
    <div className="col-3">
      <img
        src={image}
        className="rounded-circle"
        alt="UserImage"
        width="40"
        height="40"
      />
    </div>
    <div className="col-9">
      <div className="fs-6 fw-semibold">Dinesh S</div>
      <small>
        dinesh@outlook.com
        <span
          style={{ fontSize: "1em" }}
          className="material-icons  align-middle"
        >
          unfold_more
        </span>
      </small>
    </div>
  </div>
);

export default UserInfo;

UserInfo.defaultProps = {
  image:
    "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png",
};
