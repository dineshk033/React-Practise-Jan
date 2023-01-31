import React from "react";

const box = {
  backgroundColor: "lightgrey",
};

class ClassEventButton extends React.Component {
  state = {
    fruits: ["Apple", "Kiwi", "Pomo", "Grapes", "pineapple", "Gova", "Apple"],
  };

  handleClick(arg) {
    console.log(this);
    /**
     * arg we need to receive to remove tat record eg.apple
     * state.fruits we need to exclude tat value using filter(not equal)'
     * setstate
     */
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.fruits.map((el, indx) => (
          <li key={indx.toString()} style={box} className="list-group-item">
            {el}{" "}
            <button
              className="btn btn-sm btn-primary"
              onClick={(element) => this.handleClick(element, el)}
            >
              click
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ClassEventButton;
