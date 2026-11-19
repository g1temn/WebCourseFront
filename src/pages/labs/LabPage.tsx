import { lazy, type ComponentType, type LazyExoticComponent } from "react";
import { useParams } from "react-router";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getLab, labShortLabel } from "@/static-content/labs";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

const pages: Record<string, LazyExoticComponent<ComponentType>> = {
  "lab-1": lazy(() => import("./Lab1Page/Lab1Page")),
  "lab-2": lazy(() => import("./Lab2Page/Lab2Page")),
  "lab-3": lazy(() => import("./Lab3Page/Lab3Page")),
  "lab-4": lazy(() => import("./Lab4Page/Lab4Page")),
  "lab-5": lazy(() => import("./Lab5Page/Lab5Page")),
  "lab-6": lazy(() => import("./Lab6Page/Lab6Page")),
  "lab-7": lazy(() => import("./Lab7Page/Lab7Page")),
  "lab-8": lazy(() => import("./Lab8Page/Lab8Page")),
  "lab-9-1": lazy(() => import("./Lab9_1Page/Lab9_1Page")),
  "lab-9-2": lazy(() => import("./Lab9_2Page/Lab9_2Page")),
  "lab-9-3": lazy(() => import("./Lab9_3Page/Lab9_3Page")),
};

export function LabPage() {
  const { slug } = useParams();
  const lab = getLab(slug);
  useDocumentTitle(lab ? `${labShortLabel(lab)}. ${lab.title}` : "Сторінку не знайдено");
  const Page = slug ? pages[slug] : undefined;
  if (!lab || !Page) return <NotFoundPage />;
  return <Page key={slug} />;
}
