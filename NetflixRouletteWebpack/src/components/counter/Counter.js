import React from "react";
import "./Counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  changeValue(increase) {
    const { value } = this.state;
    this.setState(increase ? { value: value + 1 } : { value: value - 1 });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="counter-panel">
        <button
          type="button"
          className="counter-btn"
          onClick={() => this.changeValue(false)}
        >
          Decrease value
        </button>
        <div className="counter-value">{value}</div>
        <button
          type="button"
          className="counter-btn"
          onClick={() => this.changeValue(true)}
        >
          Increase value
        </button>
      </div>
    );
  }
}

export default Counter;
