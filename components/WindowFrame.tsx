interface WindowFrameProps {
  label: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  decorative?: boolean;
}

export function TrafficLights() {
  return (
    <>
      <span aria-hidden="true" className="editor-dot bg-[#ff5f57]" />
      <span aria-hidden="true" className="editor-dot bg-[#febc2e]" />
      <span aria-hidden="true" className="editor-dot bg-[#28c840]" />
    </>
  );
}

/** Dark app window shared by the hero editor and the terminal panels */
export default function WindowFrame({ label, children, footer, actions, decorative }: WindowFrameProps) {
  return (
    <div aria-hidden={decorative || undefined} className="editor-window">
      <div className="editor-bar">
        <TrafficLights />
        <span aria-hidden="true" className="editor-tab">{label}</span>
        {actions && <div className="editor-actions">{actions}</div>}
      </div>
      {children}
      {footer}
    </div>
  );
}
