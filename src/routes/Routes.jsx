import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Another from "../pages/another/Another";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/productDetail/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
        loader: () => fetch("../../public/products.json"),
      },
      {
        path: "/another",
        element: <Another />,
      },
    ],
  },
]);
