import React from "react";
import "./Counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  changeValue(increase) {
    this.setState((prevState) =>
      // eslint-disable-next-line no-plusplus, no-param-reassign
      increase ? prevState.value++ : prevState.value--
    );
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
