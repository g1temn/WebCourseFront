import { renderRich } from "./renderRich";

export function Rich({ text }: { text: string }) {
  return <>{renderRich(text)}</>;
}
