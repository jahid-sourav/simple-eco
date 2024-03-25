import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./hooks/CartContext";
import "./index.css";
import { router } from "./routes/Routes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster />
    </CartProvider>
  </React.StrictMode>
);
