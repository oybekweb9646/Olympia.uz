import { useRoutes } from "react-router-dom";

import { Navigate } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import { MainPage } from "../layout/MainPage";
import { ProductPage } from "../layout/ProductPage";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ],
};

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
