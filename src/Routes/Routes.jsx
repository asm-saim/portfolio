import { createBrowserRouter } from "react-router";
import Error from "../pages/Error/Error";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
