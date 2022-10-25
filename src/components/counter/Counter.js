import React from "react";
import "./Counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  changeValue(increase) {
    this.setState((prevState) =>
      increase ? prevState.value++ : prevState.value--
    );
  }

  render() {
    return (
      <div className="counter-panel">
        <button className="counter-btn" onClick={() => this.changeValue(false)}>
          Decrease value
        </button>
        <div className="counter-value">{this.state.value}</div>
        <button className="counter-btn" onClick={() => this.changeValue(true)}>
          Increase value
        </button>
      </div>
    );
  }
}

export default Counter;
