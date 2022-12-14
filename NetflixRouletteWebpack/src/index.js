import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/error-page/ErrorPage";
import { sortAndFilterResults } from "./store/actionCreators";
import store from "./store/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="search" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search",
    element: <App />,
    loader: () => {
      store.dispatch(sortAndFilterResults("", "", [], "", ""));
      return null;
    },
    children: [
      {
        path: ":searchQuery",
        element: <App />,
        loader: ({ params }) => {
          store.dispatch(
            sortAndFilterResults("", "", [], params.searchQuery, "title")
          );
          return null;
        },
      },
    ],
  },
  // {
  //   path: "search/:searchQuery",
  //   element: <App />,
  //   loader: () => {
  //     store.dispatch(sortAndFilterResults("", "", [], "", ""));
  //     return null;
  //   },
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
