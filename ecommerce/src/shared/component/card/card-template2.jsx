import styled from "styled-components";

const Title = styled.h6`
  font-size: 20px;
`;

const CardTemplate2 = (props) => {
  return (
    <div class="card" style={{ width: "350px" }}>
      <div class="card-body">
        <div class="row">
          <div className="col-3 align-self-center">
            <span style={{ fontSize: "36px" }} className="material-icons">
              {props.icon}
            </span>
          </div>
          <div className="col-9">
            <Title>{props.title}</Title>
            <div>{props.subTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate2;

CardTemplate2.defaultProps = {
  icon: "verified",
  title: "Default",
  subTitle: "Default",
};
