import React from "react";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  console.log(error);
  console.log("hey");

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
