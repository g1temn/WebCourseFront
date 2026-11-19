import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);
