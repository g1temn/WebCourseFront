import type { ComponentType } from "react";
import { useParams } from "react-router";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getLab, labShortLabel } from "@/static-content/labs";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

const pages: Record<string, ComponentType> = {};

export function LabPage() {
  const { slug } = useParams();
  const lab = getLab(slug);
  useDocumentTitle(lab ? `${labShortLabel(lab)}. ${lab.title}` : "Сторінку не знайдено");
  const Page = slug ? pages[slug] : undefined;
  if (!lab || !Page) return <NotFoundPage />;
  return <Page key={slug} />;
}
