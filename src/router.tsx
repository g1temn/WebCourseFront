import { createBrowserRouter, Navigate } from "react-router";
import { LabLayout } from "./layouts/LabLayout/LabLayout";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { CoursePage } from "./pages/CoursePage/CoursePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LabPage } from "./pages/labs/LabPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ResourcesPage } from "./pages/ResourcesPage/ResourcesPage";
import { labs } from "./static-content/labs";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "course", element: <CoursePage /> },
      { path: "resources", element: <ResourcesPage /> },
      {
        path: "labs",
        element: <LabLayout />,
        children: [
          { index: true, element: <Navigate to={`/labs/${labs[0].slug}`} replace /> },
          { path: ":slug", element: <LabPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "editor",
    lazy: async () => ({ Component: (await import("./pages/EditorPage/EditorPage")).default }),
  },
]);
