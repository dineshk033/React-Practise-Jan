import React from "react";
// import classes from "./list.css";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "React" };
    setTimeout(() => {
      this.setState({ name: "Angular" });
      console.log(this.state);
    }, 5000);
  }

  render() {
    console.log(this);
    return (
      <ul className="list-group">
        <div>{this.state.name}</div>
        {this.props.fruits.map((el, indx) => (
          <li key={indx.toString()} className="list-group-item">
            {el}
          </li>
        ))}
      </ul>
    );
  }
}

// function List(props) {
//   console.log(props);
//   const { id, fruits } = props;
//   return (
//     <ul className="list-group">
//       <div>{props.nameDum}</div>
//       {fruits.map((el, indx) => (
//         <li key={indx.toString()} className="list-group-item">
//           {el}
//         </li>
//       ))}
//     </ul>
//   );
// }
export default List;

List.defaultProps = {
  nameDum: "Defaukt Value",
  fruits: [],
};
