import { createBrowserRouter } from "react-router";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello</h1>,
    errorElement: <Error></Error>,
  },
]);
