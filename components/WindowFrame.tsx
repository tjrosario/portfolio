interface WindowFrameProps {
  label: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  decorative?: boolean;
}

/** Dark app window shared by the hero editor and the terminal panels */
export default function WindowFrame({ label, children, footer, actions, decorative }: WindowFrameProps) {
  return (
    <div aria-hidden={decorative || undefined} className="editor-window">
      <div className="editor-bar">
        <span aria-hidden="true" className="editor-dot" style={{ background: "#ff5f57" }} />
        <span aria-hidden="true" className="editor-dot" style={{ background: "#febc2e" }} />
        <span aria-hidden="true" className="editor-dot" style={{ background: "#28c840" }} />
        <span className="editor-tab">{label}</span>
        {actions && <div className="editor-actions">{actions}</div>}
      </div>
      {children}
      {footer}
    </div>
  );
}
