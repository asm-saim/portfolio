import { createBrowserRouter } from "react-router";
import Error from "../pages/Error/Error";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "resume",
        Component: Resume,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
