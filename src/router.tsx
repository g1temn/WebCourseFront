import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { CoursePage } from "./pages/CoursePage/CoursePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ResourcesPage } from "./pages/ResourcesPage/ResourcesPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "course", element: <CoursePage /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
