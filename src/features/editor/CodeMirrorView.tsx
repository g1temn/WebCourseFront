import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from "@codemirror/autocomplete";
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import {
  bracketMatching,
  indentOnInput,
  syntaxHighlighting,
} from "@codemirror/language";
import { EditorState, type Extension } from "@codemirror/state";
import {
  drawSelection,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from "@codemirror/view";
import { classHighlighter } from "@lezer/highlight";
import { useEffect, useRef } from "react";
import { fileKind } from "./fileTypes";
import styles from "./CodeMirrorView.module.scss";

function languageFor(path: string): Extension {
  const kind = fileKind(path);
  if (kind === "html") return html({ autoCloseTags: true });
  if (kind === "css") return css();
  if (kind === "js") return javascript();
  return [];
}

function createState(
  path: string,
  doc: string,
  onChange: (path: string, value: string) => void,
): EditorState {
  return EditorState.create({
    doc,
    extensions: [
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightActiveLine(),
      history(),
      drawSelection(),
      indentOnInput(),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      EditorState.tabSize.of(2),
      syntaxHighlighting(classHighlighter),
      keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...historyKeymap,
        ...completionKeymap,
        indentWithTab,
      ]),
      languageFor(path),
      EditorView.contentAttributes.of({
        "aria-label": `Код файлу ${path}`,
        autocapitalize: "off",
        autocorrect: "off",
      }),
      EditorView.updateListener.of((update) => {
        if (update.docChanged) onChange(path, update.state.doc.toString());
      }),
    ],
  });
}

interface CodeMirrorViewProps {
  fileKey: string;
  path: string;
  value: string;
  onChange: (path: string, value: string) => void;
}

export function CodeMirrorView({
  fileKey,
  path,
  value,
  onChange,
}: CodeMirrorViewProps) {
  const host = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const states = useRef(new Map<string, EditorState>());
  const onChangeRef = useRef(onChange);
  const currentKey = useRef(fileKey);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const initial = useRef({ path, value, fileKey });

  useEffect(() => {
    const { path: firstPath, value: firstValue, fileKey: firstKey } = initial.current;
    const emit = (p: string, v: string) => onChangeRef.current(p, v);
    const state = createState(firstPath, firstValue, emit);
    states.current.set(firstKey, state);
    view.current = new EditorView({ state, parent: host.current! });
    currentKey.current = firstKey;
    return () => {
      view.current?.destroy();
      view.current = null;
    };
  }, []);

  useEffect(() => {
    const v = view.current;
    if (!v) return;
    if (currentKey.current !== fileKey) {
      states.current.set(currentKey.current, v.state);
      const emit = (p: string, val: string) => onChangeRef.current(p, val);
      let next = states.current.get(fileKey);
      if (!next || next.doc.toString() !== value)
        next = createState(path, value, emit);
      v.setState(next);
      currentKey.current = fileKey;
    } else if (v.state.doc.toString() !== value) {
      v.dispatch({
        changes: { from: 0, to: v.state.doc.length, insert: value },
      });
    }
  }, [fileKey, path, value]);

  return <div ref={host} className={styles.host} />;
}
