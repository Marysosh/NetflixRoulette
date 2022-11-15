/* eslint-disable react/prop-types */

import React from "react";

class ErrorBoundary extends React.Component {
  // Constructor for initializing Variables etc in a state
  // Just similar to initial line of useState if you are familiar
  // with Functional Components
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // This method is called if any error is encountered
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error
    // reporting service here
  }

  // This will render this component wherever called
  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      // Error path
      return (
        <>
          <h2>Oops something wrong happened...</h2>
          <details>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </>
      );
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return children;
  }
}

export default ErrorBoundary;
