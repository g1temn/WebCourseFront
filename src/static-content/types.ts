export type TechGroup = "html" | "css" | "figma";

export interface LabFile {
  name: string;
  label?: string;
  kind: "image" | "text";
}

export interface LabMeta {
  slug: string;
  group: TechGroup;
  number: number;
  title: string;
  shortTitle: string;
  topic: string;
  lead: string;
  hours: number;
  hasEditor: boolean;
  files: LabFile[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  labSlug?: string;
}

export interface Resource {
  id: string;
  kind: "course" | "docs" | "article";
  tech: TechGroup;
  title: string;
  author: string;
  description: string;
  url: string;
  labSlugs: string[];
  lang?: "uk" | "en";
  featured?: boolean;
}

export interface QuestionPayload {
  name: string;
  email?: string;
  labSlug?: string;
  message: string;
}
