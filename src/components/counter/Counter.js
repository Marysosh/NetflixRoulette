import React from "react";
import "./Counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  changeValue(increase) {
    const newValue = increase ? this.state.value + 1 : this.state.value - 1;
    this.setState({ value: newValue });
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
