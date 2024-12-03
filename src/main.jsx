import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router";
import { RouterProvider } from "react-router";
import UtilitiesProvider from "./Context/UtilitiesProvider";
import AuthProvider from "./Context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UtilitiesProvider>
        <RouterProvider router={router}></RouterProvider>
      </UtilitiesProvider>
    </AuthProvider>
  </StrictMode>
);
