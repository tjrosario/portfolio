"use client";

import { Fragment } from "react";
import { useSeason } from "@/lib/season";
import { siteConfig } from "@/site.config";
import WindowFrame from "./WindowFrame";

const list = (items: readonly string[]) => (
  <>
    <span className="tok-punct">[</span>
    {items.map((item, i) => (
      <Fragment key={item}>
        {i > 0 && <span className="tok-punct">, </span>}
        <span className="tok-string">&quot;{item}&quot;</span>
      </Fragment>
    ))}
    <span className="tok-punct">]</span>
  </>
);

const prop = (key: string, value: React.ReactNode) => (
  <>
    {"  "}<span className="tok-key">{key}</span><span className="tok-punct">: </span>
    {value}<span className="tok-punct">,</span>
  </>
);

const LINES: React.ReactNode[] = [
  <span key="comment" className="tok-comment">{"// 15+ years shipping production web apps"}</span>,
  <><span className="tok-keyword">const</span> <span className="tok-name">engineer</span> <span className="tok-punct">= {"{"}</span></>,
  prop("name", <span className="tok-string">&quot;{siteConfig.name}&quot;</span>),
  prop("role", <span className="tok-string">&quot;{siteConfig.role}&quot;</span>),
  prop("stack", list(siteConfig.heroCode.stack)),
  prop("shipsWith", list(siteConfig.heroCode.shipsWith)),
  prop("openTo", list(siteConfig.heroCode.openTo)),
];

export default function HeroEditor() {
  const season = useSeason();
  const lines = [
    ...LINES,
    prop("season", <span className="tok-string">&quot;{season?.label ?? "loading"}&quot;</span>),
    <><span className="tok-punct">{"};"}</span><span className="editor-caret" /></>,
  ];

  return (
    <WindowFrame
      decorative
      label="engineer.tsx"
      footer={
        <div className="editor-status">
          <span>main</span>
          <span>TypeScript</span>
          <span>{season?.greeting}</span>
        </div>
      }
    >
      <pre className="editor-code">
        {lines.map((line, i) => (
          <div key={i} className="editor-line">
            <span className="editor-gutter">{i + 1}</span>
            <code>{line}</code>
          </div>
        ))}
      </pre>
    </WindowFrame>
  );
}
