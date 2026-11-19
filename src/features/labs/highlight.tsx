import type { ReactNode } from "react";
import styles from "./highlight.module.scss";

export type CodeLang = "html" | "css" | "js" | "text";

type Token = [kind: string | null, text: string];

const JS_KEYWORDS =
  /^(const|let|var|function|return|if|else|for|while|new|true|false|null|undefined|document|window|this|class|import|export|from)$/;

function tokenizeCss(code: string): Token[] {
  const tokens: Token[] = [];
  const re = /(\/\*[\s\S]*?\*\/)|([{};:])|("[^"]*"|'[^']*')|([^{};:"'/]+|\/)/g;
  let depth = 0;
  let inValue = false;
  for (const m of code.matchAll(re)) {
    const [text, comment, punct, str] = m;
    if (comment) tokens.push(["comment", text]);
    else if (punct) {
      if (punct === "{") {
        depth++;
        inValue = false;
      }
      if (punct === "}") {
        depth = Math.max(0, depth - 1);
        inValue = false;
      }
      if (punct === ";") inValue = false;
      if (punct === ":" && depth > 0) inValue = true;
      tokens.push([null, text]);
    } else if (str) tokens.push(["string", text]);
    else if (depth === 0) tokens.push(["tag", text]);
    else tokens.push([inValue ? "string" : "attr", text]);
  }
  return tokens;
}

function tokenizeJs(code: string): Token[] {
  const tokens: Token[] = [];
  const re =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)|([\s\S])/g;
  for (const m of code.matchAll(re)) {
    const [text, comment, str, num, word] = m;
    if (comment) tokens.push(["comment", text]);
    else if (str) tokens.push(["string", text]);
    else if (num) tokens.push(["number", text]);
    else if (word)
      tokens.push([JS_KEYWORDS.test(word) ? "keyword" : null, text]);
    else tokens.push([null, text]);
  }
  return tokens;
}

function tokenizeTag(tag: string): Token[] {
  const tokens: Token[] = [];
  const head = /^<\/?[^\s>/]+/.exec(tag);
  if (!head) return [[null, tag]];
  tokens.push(["tag", head[0]]);
  const rest = tag.slice(head[0].length);
  const re = /(\s+)|("[^"]*"?|'[^']*'?)|(\/?>)|(=)|([^\s=>"']+)/g;
  for (const m of rest.matchAll(re)) {
    const [text, space, str, close, eq] = m;
    if (space || eq) tokens.push([null, text]);
    else if (str) tokens.push(["string", text]);
    else if (close) tokens.push(["tag", text]);
    else tokens.push(["attr", text]);
  }
  return tokens;
}

function tokenizeHtml(code: string): Token[] {
  const tokens: Token[] = [];
  const re =
    /(<!--[\s\S]*?-->)|(<!DOCTYPE[^>]*>)|(<\/?[a-zA-Z][^>]*>?)|(&[a-zA-Z#0-9]+;)|([^<&]+|[<&])/gi;
  let embedded: "css" | "js" | null = null;
  let buffer = "";
  for (const m of code.matchAll(re)) {
    const [text, comment, doctype, tag, entity] = m;
    if (embedded) {
      if (
        tag &&
        new RegExp(`^</${embedded === "css" ? "style" : "script"}`, "i").test(
          tag,
        )
      ) {
        tokens.push(
          ...(embedded === "css" ? tokenizeCss(buffer) : tokenizeJs(buffer)),
        );
        buffer = "";
        embedded = null;
        tokens.push(...tokenizeTag(tag));
      } else buffer += text;
      continue;
    }
    if (comment) tokens.push(["comment", text]);
    else if (doctype) tokens.push(["comment", text]);
    else if (tag) {
      tokens.push(...tokenizeTag(tag));
      if (/^<style/i.test(tag)) embedded = "css";
      if (/^<script/i.test(tag) && !/\ssrc=/i.test(tag)) embedded = "js";
    } else if (entity) tokens.push(["entity", text]);
    else tokens.push([null, text]);
  }
  if (buffer)
    tokens.push(
      ...(embedded === "css" ? tokenizeCss(buffer) : tokenizeJs(buffer)),
    );
  return tokens;
}

export function highlight(code: string, lang: CodeLang): ReactNode[] {
  const tokens =
    lang === "html"
      ? tokenizeHtml(code)
      : lang === "css"
        ? tokenizeCss(code)
        : lang === "js"
          ? tokenizeJs(code)
          : [[null, code] as Token];
  return tokens.map(([kind, text], i) =>
    kind ? (
      <span key={i} className={styles[kind]}>
        {text}
      </span>
    ) : (
      text
    ),
  );
}
