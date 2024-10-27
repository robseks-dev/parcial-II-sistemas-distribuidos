import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./assets/css/index.css";

import { ContextProvider } from "./context/Context";

import MainPage from "./pages/MainPage";
import AddInventory from "./pages/AddInventory";
import EditInventory from "./pages/EditInventory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/inventories" />,
  },
  {
    path: "/inventories",
    element: <MainPage />,
  },
  {
    path: "/inventories/add",
    element: <AddInventory />,
  },
  {
    path: "/inventories/edit/:code",
    element: <EditInventory />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);