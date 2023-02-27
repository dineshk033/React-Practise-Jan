import { Link } from "react-router-dom";

const handleCart = (arg) => {
  const temp = {
    userId: 1,
    products: [],
  };
  temp.products.push({ id: arg.id, quantity: 1 });
  console.log(temp);
};
const Card = (props) => {
  return (
    <div className="card col-3 m-1">
      <div className="card-body">
        <h6>
          <Link to={`/products/${props.id}`}>{props.title}</Link>
        </h6>
        <div className="text-sucess">{props.price}</div>
        <button onClick={() => handleCart(props)} className="btn btn-warning">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
