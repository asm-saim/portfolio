import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import "./index.css";

import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router/dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router}></RouterProvider>
    </MotionConfig>
  </StrictMode>,
);
