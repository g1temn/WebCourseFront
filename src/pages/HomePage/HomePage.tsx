import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { AskQuestionSection } from "./sections/AskQuestionSection";
import { EditorPromoSection } from "./sections/EditorPromoSection";
import { FaqSection } from "./sections/FaqSection";
import { HeroSection } from "./sections/HeroSection";
import { LabsTableSection } from "./sections/LabsTableSection";
import { TechnologiesSection } from "./sections/TechnologiesSection";

export function HomePage() {
  useDocumentTitle();

  return (
    <main id="main">
      <HeroSection />
      <TechnologiesSection />
      <LabsTableSection />
      <EditorPromoSection />
      <FaqSection />
      <AskQuestionSection />
    </main>
  );
}
